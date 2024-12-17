import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";
import { FadingTransition } from "react-native-reanimated";

const styles = StyleSheet.create({
  dark: {
    addCourseButton: {
      backgroundColor: DARKMODECOLORS.dark,
    },
  },
  light: {
    addCourseButton: {
      backgroundColor: COLORS.darkGrey,
    },
  },
  container: (display, theme) => ({
    display: display ? "flex" : "none",
    height: 70,
    justifyContent: "center",
    position: "absolute",
    backgroundColor: theme === "light" ? COLORS.light : DARKMODECOLORS.dark,
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    borderTopWidth: 0,
    elevation: 0,
    borderTopColor: "transparent",
    ...SHADOWS.medium,
    shadowColor: COLORS.dark,
  }),
  addCourseButton: {
    width: 35,
    height: 35,
    borderRadius: 10,
    borderColor: COLORS.dark,
    borderWidth: 1,
    backgroundColor: COLORS.darkGrey,
    justifyContent: "center",
    alignItems: "center",
  },
  tabIconContainer: (focused, theme) => ({
    paddingRight: 22,
    paddingTop: 6,
    paddingLeft: 22,
    paddingBottom: 6,
    backgroundColor: focused
      ? theme == "light"
        ? COLORS.tertiary
        : "rgba(227, 158, 83, 0.2)"
      : null,
    borderRadius: 50,
    alignItems: "center",
  }),
  tabBarIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
  },
  tabTag: (color) => ({
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.xSmall,
    color: color,
  }),

  // Custom Tab bar

  custom: {
    dark: {
      container: {
        backgroundColor: DARKMODECOLORS.dark,
      },
      addCourseButton: {
        backgroundColor: DARKMODECOLORS.dark,
      },
    },
    light: {
      container: {
        backgroundColor: COLORS.light,
      },
      addCourseButton: {
        backgroundColor: COLORS.darkGrey,
      },

    },
    container: {
      display: "flex",
      flexDirection: "row",
      height: 70,
      paddingLeft: 25,
      paddingRight: 25,
      width: "100%",
      bottom: 0,
      justifyContent: "space-between",
      alignItems: "center",
      position: "absolute",
      backgroundColor: COLORS.light,
      borderTopStartRadius: 30,
      borderTopEndRadius: 30,
      borderTopWidth: 0,
      elevation: 0,
      borderTopColor: "transparent",
      ...SHADOWS.medium,
      shadowColor: COLORS.dark,
    },
    addCourseButton: {
      width: 50,
      height: 50,
      borderRadius: 50,
      borderColor: COLORS.dark,
      borderWidth: 1,
      backgroundColor: COLORS.light,
      justifyContent: "center",
      alignItems: "center",
    },
    tabBarIconContainer: {
      alignItems: "center",
      justifyContent: "center",
      gap: 5,
    },
    tabTag: {
      fontFamily: FONT.mediumPoppins,
      fontSize: SIZES.xSmall,
      color: COLORS.darkGrey,
    },
  },
});

export default styles;
