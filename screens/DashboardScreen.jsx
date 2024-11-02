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
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "expo-router";
import { TabBarContext } from "../context/TabBarContext";
import DashboardSearch from "../components/dashboard/DashboardSearch";
import MileStones from "../containers/dashboard/MileStones";
import CoursesContainer from "../containers/dashboard/CoursesContainer";

import styles from "../styles/screens/dashboard.style";
import { icons, COLORS, SIZES } from "../constants";

// import SystemNavigationBar from 'react-native-system-navigation-bar';

// SystemNavigationBar.fullScreen(true)

const DashboardScreen = () => {
  const user = useSelector((state) => state.user);
  const childRef = useRef(null);
  const { display, setDisplay } = useContext(TabBarContext);
  const [name, setName] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const getUser = async () => {
      setName(user.name);
    };
    getUser();
    setDisplay(true);
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
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundGrey }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.backgroundGrey}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={styles.container}>
            <View style={styles.notificationWrapper}>
              <View>
                <Text style={styles.greeting}>
                  Welcome, {name.split(" ")[0]}!
                </Text>
              </View>
              <Pressable style={styles.notIconContainer}>
                {/* <View style={styles.notificationAlert} /> */}
                <Ionicons
                  name="notifications-outline"
                  color={COLORS.dark}
                  size={SIZES.xLarge}
                />
              </Pressable>
            </View>

            {/* SearchBar */}
            <DashboardSearch placeholder={"Ask Simesta AI "} />

            {/* Milestones */}
            <MileStones />

            {/* Courses */}
            <CoursesContainer ref={childRef} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default DashboardScreen;
