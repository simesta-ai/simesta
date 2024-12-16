import {
  Text,
  ScrollView,
  View,
  RefreshControl,
  Image,
  Pressable,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Skeleton } from "moti/skeleton";
import { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";
import Toast from "react-native-toast-message";
import { NotificationContext } from "../context/NotificationContext";
import { ThemeContext } from "../context/ThemeContext";

import BackButtonContainer from "../containers/BackButtonContainer";
import NotificationContainer from "../components/dashboard/NotificationContainer";

import { COLORS, SIZES, images, DARKMODECOLORS } from "../constants";
import styles from "../styles/screens/notifications.style";

const LearningMethodChatScreen = () => {
  const { theme } = useContext(ThemeContext);
  const user = useSelector((state) => state.user);
  const { notifications, setNotifications } = useContext(NotificationContext);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(true);

  const getNotifications = async () => {
    setLoading(true);
    try {
      const res = await fetch(`http://192.168.45.93:3000/api/notifications/user/${user.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        }
      })
      const data = await res.json();
      if (res.ok) {
        setNotifications(data.notifications);
      } else {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: data.message,
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Error getting notifications",
      });
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
    getNotifications()
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: 
        theme == "light" ? COLORS.backgroundGrey : DARKMODECOLORS.dark, position: "relative" }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.backgroundGrey}
      />
      <View
        style={{
          paddingTop: 15,
        }}
      >
        <BackButtonContainer />
        <Text style={styles.headerText}>Notifications</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="always"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={styles.container}>
          {loading ? (
            <View style={styles.skeletonContainer}>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
            </View>
          ) : notifications && notifications.length > 0 ? <NotificationContainer notifications={notifications} /> : <View style={styles.noNotContainer}>
            <Image source={images.noNotification} resizeMethod="contain" style={styles.noNotImage} />
            <Text style={styles.noNotificationsText}>No notifications yet!</Text>
            <Text style={styles.noNotTexBody}>You currently have no notifications. We will notify you when something new happens!</Text>
          </View>}
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default LearningMethodChatScreen;
