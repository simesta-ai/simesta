import { Text, View, Pressable } from "react-native";
import CustomIcon from "./CustomIcon";

import styles from "../styles/components/bottomTab.style";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { COLORS, SIZES, DARKMODECOLORS } from "../constants";
import { useRouter } from "expo-router";

const AddCourseButton = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);

  // const handleAddCourse = () => {
  //   setDisplay(false)
  // }

  return (
    <View style={styles.tabBarIconContainer}>
      <View style={styles.addCourseButton}>
        <CustomIcon name="add" size={SIZES.xLarge} color={
          theme === "light" ? COLORS.light : DARKMODECOLORS.light
        } />
      </View>
      <Text style={styles.tabTag(
        theme === "light" ? COLORS.darkGrey : COLORS.lightGrey
      )}>New course</Text>
    </View>
  );
};

export default AddCourseButton;
