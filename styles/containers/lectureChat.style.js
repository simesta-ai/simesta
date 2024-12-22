import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";

const styles = StyleSheet.create({
  dark: {
    drawerContainer: {
      backgroundColor: DARKMODECOLORS.dark,
    },
    drawerLine: {
      backgroundColor: COLORS.miniDarkGrey,
    },
  },
  light: {
    drawerContainer: {
      backgroundColor: COLORS.light,
    },
    drawerLine: {
      backgroundColor: COLORS.miniDarkGrey,
    },
  },
  transparentBackground: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0.7)",
  },
  closeBtn: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 1001,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: COLORS.darkGrey,
    alignItems: "center",
    justifyContent: "center",
    ...SHADOWS.buttonShadow,
  },
  drawerContainer: {
    width: "100%",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: COLORS.light,
    padding: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  drawerLineCon: {
    width: "100%",
    height: 30,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center",
  },
  drawerLine: {
    width: 50,
    height: 5,

    borderRadius: 10,
    alignSelf: "center",
  },
  chatContainer: {
    bottom: 50,
  },
});

export default styles;
