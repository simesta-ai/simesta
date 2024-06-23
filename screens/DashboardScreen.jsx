
import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Pressable,
  ActivityIndicator,
  TouchableOpacity
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { usePathname } from "expo-router";
import { TabBarContext } from '../context/TabBarContext'
import DashboardSearch from "../components/dashboard/DashboardSearch";
import MileStones from "../containers/dashboard/MileStones";
import CoursesContainer from "../containers/dashboard/CoursesContainer";

import styles from "../styles/screens/dashboard.style";
import { icons, COLORS, SIZES } from "../constants";

const DashboardScreen = () => {
  const user = useSelector(state => state.user)
  const { display, setDisplay} = useContext(TabBarContext);
  const [ name, setName ] = useState("")
  const pathname= usePathname()

  useEffect(() => {
    const getUser = async () => {
      setName(user.name)
    }
    getUser()
    setDisplay(true)
  }, [])

  if(name.length == 0) {
    return <ActivityIndicator size="large" color={COLORS.primary} style={{marginTop: 100}}/>
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundGrey }}>
        <StatusBar barStyle="dark-content" backgroundColor={COLORS.backgroundGrey} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>
            <View style={styles.notificationWrapper}>
              <View></View>
              <Pressable style={styles.notIconContainer}>
                <View style={styles.notificationAlert} />
                <Ionicons name="notifications-outline" color={COLORS.dark} size={SIZES.xLarge} />
              </Pressable>
            </View>
            <Text style={styles.greeting}>
              Welcome, {name.split(' ')[0]} !
            </Text>

            {/* SearchBar */}
            <DashboardSearch placeholder={"Ask Simesta AI "} />

            {/* Milestones */}
            <MileStones />

            {/* Courses */}
            <CoursesContainer  />


          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default DashboardScreen;
