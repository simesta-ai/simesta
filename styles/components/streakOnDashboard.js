import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";

const styles = StyleSheet.create({
  dark: {
    container: {
      backgroundColor: "rgba(245, 219, 194, 0.1)",
    },
    text: {
      color: COLORS.light,
    },
  },
  light: {
    container: {
      backgroundColor: COLORS.miniTransWarm,
    },
    text: {
      color: COLORS.dark,
    },
  },
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: COLORS.miniTransWarm,
    borderRadius: 20,
    marginTop: 10,
  },
  text: {
    color: COLORS.dark,
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.medium,
  },
  streakIcon: {
    width: 20,
    height: 30,
    marginRight: 10,
  },
  streakTextCon: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default styles;
