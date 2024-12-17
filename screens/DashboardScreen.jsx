import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Pressable,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from "react-native";
import * as Notifications from "expo-notifications";
import Constants from "expo-constants";
import Toast from "react-native-toast-message";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../redux/slices/userSlice";
import { usePathname, useRouter } from "expo-router";
import { TabBarContext } from "../context/TabBarContext";
import { ThemeContext } from "../context/ThemeContext";
import { SearchScreenContext } from "../context/SearchScreenContext";
import DashboardSearch from "../components/dashboard/DashboardSearch";
import MileStones from "../containers/dashboard/MileStones";
import CoursesContainer from "../containers/dashboard/CoursesContainer";
import SearchResultsScreen from "./SearchResultsScreen";


import styles from "../styles/screens/dashboard.style";
import { icons, COLORS, SIZES, DARKMODECOLORS } from "../constants";
import Recommendations from "../containers/dashboard/Recommendations";

const DashboardScreen = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const user = useSelector((state) => state.user);
  const childRef = useRef(null);
  const { display, setDisplay } = useContext(TabBarContext);
  const { displaySearch, setDisplaySearch } = useContext(SearchScreenContext);
  const { theme } = useContext(ThemeContext)
  const [name, setName] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const pathname = usePathname();

  async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.deviceName) {
      const { status: existingStatus } =
        await Notifications.getPermissionsAsync();
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        Toast({
          type: "error",
          text1: "Failed to get push token for push notification!",
        })
        return;
      }
      token = (await Notifications.getExpoPushTokenAsync()).data;
    } else {
      Toast({
        type: "error",
        text1: "Must use physical device for Push Notifications",
      })
    }

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    return token;
  }

  const goToNotifications = () => {
    router.navigate("/user/notifications");
  }

  useEffect(() => {
    const getUser = async () => {
      setName(user.name);
    };
    getUser();
    setDisplay(true);
  }, []);

  useEffect(() => {
    const getDeviceToken = async () => {
      if(!user.deviceToken) {
        const token = await registerForPushNotificationsAsync();
        if(token) {
          dispatch(userActions.setDeviceToken(token));
          setImmediate( async () => {
            const res = await fetch(`http://192.168.60.93:3000/api/notifications/allow`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${user.accessToken}`,
              },
              body: JSON.stringify({
                userId: user.id,
                token: token,
              }),
            })
            const data = await res.json();
            if(res.status !== 200) {
              Toast({
                type: "error",
                text1: data.message,
              })
            } else {
              Toast({
                type: "success",
                text1: data.message,
              })
            }
          })

        }
      }
    }
    getDeviceToken();
  }, []);


  const onRefresh = () => {
    if (childRef.current) {
      setRefreshing(true);
      setTimeout(() => {
        setRefreshing(false);
      }, 2000);
      childRef.current.getUserCourses();
    }
  };

  if (!name || name.length == 0) {
    return (
      <ActivityIndicator
        size="large"
        color={COLORS.primary}
        style={{ marginTop: 100 }}
      />
    );
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: theme == "light" ? COLORS.light : DARKMODECOLORS.dark, }}>
      <StatusBar
        barStyle={theme == "light" ? "dark-content" : "light-content"}
        backgroundColor={theme == "light" ? COLORS.light : DARKMODECOLORS.dark}
      />
      {/* // Search bar */}
      { displaySearch ? <View style={styles.searchBarAndResults}>
        <SearchResultsScreen />
      </View>: null }
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={[styles.container, styles[theme].container]}>
            <View style={styles.notificationWrapper}>
              <View>
                <Text style={[styles.greeting, styles[theme].greeting]}>
                  Welcome, {name.split(" ")[0]}!
                </Text>
              </View>
              <Pressable onPress={goToNotifications} style={styles.notIconContainer}>
                {/* <View style={styles.notificationAlert} /> */}
                <Ionicons
                  name="notifications-outline"
                  color={
                    theme == "light" ? COLORS.dark : DARKMODECOLORS.light
                  }
                  size={SIZES.xLarge}
                />
              </Pressable>
            </View>

            {/* SearchBar */}
            <DashboardSearch placeholder={"Search or ask Simesta AI "} />

            
            {/* Milestones */}
            <MileStones />

            <Recommendations />

           

            {/* Courses */}
            <CoursesContainer ref={childRef} />
          </View>
        </ScrollView>
        <Toast />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default DashboardScreen;
