import { Tabs } from "expo-router";
import CustomIcon from "../../components/CustomIcon";
import AddCourseButton from "../../components/AddCourseButton";

import { COLORS, SIZES } from '../../constants'
import styles from '../../styles/components/bottomTab.style'

const DashboardTabs = () => {
  return (
    <Tabs screenOptions={{
      tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container
    }}>
      <Tabs.Screen name="home" options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="home"
            size={SIZES.large}
            color={focused ? COLORS.primary : COLORS.lightGrey}
          />
        ),
      }} />
      <Tabs.Screen name="courses" options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="courses"
            size={SIZES.large}
            color={focused ? COLORS.primary : COLORS.lightGrey}
          />
        ),
      }} />
      <Tabs.Screen name="new-course" options={{
        tabBarIcon: ({ focused }) => (
          <AddCourseButton />
        ),
      }} />
      <Tabs.Screen name="take-test" options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="quiz"
            size={SIZES.large}
            color={focused ? COLORS.primary : COLORS.lightGrey}
          />
        ),
      }} />
      <Tabs.Screen name="profile" options={{
        tabBarIcon: ({ focused }) => (
          <CustomIcon
            name="profile"
            size={SIZES.xLarge}
            color={focused ? COLORS.primary : COLORS.lightGrey}
          />
        ),
      }} />
    </Tabs>
  );
}
export default DashboardTabs;