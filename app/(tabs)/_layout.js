import { Tabs } from "expo-router";

import { KeyboardAvoidingView, Platform } from "react-native";
import CustomIcon from "../../components/CustomIcon";
import TabBarIcons from "../../components/TabBarIcons";
import AddCourseButton from "../../components/AddCourseButton";
import { TabBarContext } from "../../context/TabBarContext";
import { ThemeContext } from "../../context/ThemeContext";

import { COLORS, SIZES, DARKMODECOLORS } from "../../constants";
import styles from "../../styles/components/bottomTab.style";
import { useContext, useEffect } from "react";
import { usePathname } from "expo-router";

const DashboardTabs = () => {

  const { display, setDisplay} = useContext(TabBarContext);
  const { theme } = useContext(ThemeContext)
  const pathname = usePathname()
  const toDisplayTabPaths = ["home", "courses", "new-course", "take-test", "profile", "course"]

  useEffect(() => {
    if(toDisplayTabPaths.includes(pathname.split("/")[1])){
      setDisplay(true)
    } else {
      setDisplay(false)
    }
  }, [pathname])

  return (
    
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
    <Tabs
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.container(display, theme),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcons
              tag="Home"
              name="home"
              size={SIZES.large}
              color={focused ? 
                theme === "light" ? COLORS.dark : COLORS.light
                : 
                theme === "light" ? COLORS.lightGrey : DARKMODECOLORS.miniDarkGrey
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="courses"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcons
              tag= "Courses"
              name="courses"
              size={SIZES.large}
              color={focused ? 
                theme === "light" ? COLORS.dark : COLORS.light
                : 
                theme === "light" ? COLORS.lightGrey : DARKMODECOLORS.miniDarkGrey
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="new-course"
        options={{
          tabBarIcon: ({ focused }) => <AddCourseButton />,
        }}
      />
      <Tabs.Screen
        name="take-test"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcons
              tag="Test"
              name="puzzle"
              size={SIZES.large}
              color={focused ? 
                theme === "light" ? COLORS.dark : COLORS.light
                : 
                theme === "light" ? COLORS.lightGrey : DARKMODECOLORS.miniDarkGrey
              }
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabBarIcons
              tag="Profile"
              name="profile"
              size={SIZES.large}
              color={focused ? 
                theme === "light" ? COLORS.dark : COLORS.light
                : 
                theme === "light" ? COLORS.lightGrey : DARKMODECOLORS.miniDarkGrey
              }
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
    </KeyboardAvoidingView>

  );
};
export default DashboardTabs;

