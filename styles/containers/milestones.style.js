import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";

const styles = StyleSheet.create({
  dark: {
    container: {
      backgroundColor: DARKMODECOLORS.grey,
    },
    header: {
      color: DARKMODECOLORS.light,
    },
    milestoneText: {
      color: DARKMODECOLORS.light,
    },
  },
  light: {
    container: {
      backgroundColor: COLORS.light,
    },
    header: {
      color: COLORS.dark,
    },
    milestoneText: {
      color: COLORS.dark,
    },
  },

  container: {
    padding: 20,
    marginTop: 10,
    backgroundColor: COLORS.transWarm,
    borderRadius: 20,
    borderColor: COLORS.lightGrey,
    borderWidth: 0,
    flexDirection: "column",
    gap: 10,
  },
  header: {
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.medium,
    color: COLORS.dark,
  },
  milestoneContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  milestoneText: (completed, theme) => ({
    fontFamily: FONT.regularPoppins,
    fontSize: SIZES.regular,
    color:
      completed && theme === "light"
        ? COLORS.dark
        : completed && theme === "dark"
        ? DARKMODECOLORS.light
        : theme === "light"
        ? COLORS.dark
        : DARKMODECOLORS.miniDarkGrey,

    textDecorationLine: completed ? "line-through" : "none",
  }),
  checkContainer: (completed, type, theme) => ({
    width: 20,
    height: 20,
    borderRadius: 15,
    borderColor:
      completed && type === "dashboard-check"
        ? theme == "light"
          ? COLORS.dark
          : DARKMODECOLORS.light
        : completed && type === "complete-check"
        ? COLORS.progress
        : theme === "light"
        ? COLORS.dark
        : DARKMODECOLORS.light,
    borderWidth: 2,
    backgroundColor:
      completed && type === "dashboard-check"
        ? theme == "light"
          ? COLORS.dark
          : DARKMODECOLORS.light
        : completed && type === "complete-check"
        ? COLORS.progress
        : theme === "light"
        ? COLORS.light
        : null,
    justifyContent: "center",
    alignItems: "center",
  }),
});

export default styles;
