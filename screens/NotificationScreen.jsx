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
import { useState, useContext } from "react";
import { NotificationContext } from "../context/NotificationContext";

import BackButtonContainer from "../containers/BackButtonContainer";
import Notification from "../components/dashboard/Notification";

import { COLORS, SIZES, images } from "../constants";
import styles from "../styles/screens/notifications.style";

const LearningMethodChatScreen = () => {
  const { notifications, setNotifications } = useContext(NotificationContext);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.light, position: "relative" }}
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
        {notifications.length > 0 ? <Notification /> : <View style={styles.noNotContainer}>
          <Image source={images.noNotification} resizeMethod="contain" style={styles.noNotImage} />
          <Text style={styles.noNotificationsText}>No notifications yet!</Text>
          <Text style={styles.noNotTexBody}>You currently have no notifications. We will notify you when something new happens!</Text>
          </View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearningMethodChatScreen;
