import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  transparentBackground: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 1000,
    justifyContent: "flex-end",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
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
    backgroundColor: COLORS.light,
    borderRadius: 10,
    alignSelf: "center",
    justifyContent: "center"
  },
  drawerLine: {
    width: 50,
    height: 5,
    backgroundColor: COLORS.miniDarkGrey,
    borderRadius: 10,
    alignSelf: "center",
  },
  chatContainer: {
    bottom: 50,
  }
});

export default styles;
