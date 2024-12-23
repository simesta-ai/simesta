import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";

const styles = StyleSheet.create({
  dark: {
    container: {
      backgroundColor: DARKMODECOLORS.dark,
    },
    headerText: {
      color: DARKMODECOLORS.light,
    },
    linkText: {
      color: DARKMODECOLORS.light,
    },
    accountText: {
      color: DARKMODECOLORS.light,
    },
    otpInputField: {
      backgroundColor: DARKMODECOLORS.grey,
      color: DARKMODECOLORS.light,
      borderColor: DARKMODECOLORS.grey
    },
    otpInputHighlight: {
      borderWidth: 2,
      borderColor: COLORS.primary,
    },
    pinCodeTextStyle: {
      color: DARKMODECOLORS.light,
    },
    loaderContainer: {
      backgroundColor: DARKMODECOLORS.grey,
    },
  },
  light: {
    container: {
      backgroundColor: COLORS.light,
    },
    headerText: {
      color: COLORS.dark,
    },
    linkText: {
      color: COLORS.dark,
    },
    accountText: {
      color: COLORS.dark,
    },
    otpInputField: {
      backgroundColor: COLORS.light,
      color: COLORS.dark,
      borderColor: COLORS.grey,
    },
    otpInputHighlight: {
      borderWidth: 2,
      borderColor: COLORS.primary,
    },
    pinCodeTextStyle: {
      color: COLORS.dark,
    },
    loaderContainer: {
      backgroundColor: COLORS.grey,
    },
  },
  container: {
    flex: 1,
    paddingLeft: SIZES.medium,
    paddingRight: SIZES.medium,
    paddingTop: 50,
    paddingBottom: 50,
    fontFamily: FONT.regularPoppins,
  },
  logoContainer: {
    flexDirection: "row",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  logoImage: {
    width: "100%",
    height: "100%",
  },
  headerText: {
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.xLarge,
    color: COLORS.dark,
    textAlign: "center",
  },
  accentText: {
    color: COLORS.primary,
  },
  taglineText: {
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.regular,
    color: COLORS.lightGrey,
    textAlign: "center",
    marginTop: 5,
  },
  formContainer: {
    flexDirection: "column",
    gap: SIZES.medium,
    marginTop: 30,
  },
  inputFieldContainer: {
    position: "relative",
  },
  inputField: (focused, type, theme) => ({
    width: "100%",
    height: 50,
    fontFamily: FONT.regularPoppins,
    fontSize: SIZES.regular,
    backgroundColor: theme == "light" ? COLORS.vLightGrey : DARKMODECOLORS.grey,
    color: theme == "light" ? COLORS.miniDarkGrey : COLORS.light,
    borderRadius: SIZES.xSmall,
    paddingLeft: SIZES.medium,
    paddingRight: type === " password" ? 50 : SIZES.medium,
    lineHeight: 0,
  }),
  viewTextButton: {
    justifyContent: "center",
    alignItems: "center",
    // width: 10,
    // height: 10,
    padding: 10,
    position: "absolute",
    right: 10,
    top: 5,
    zIndex: 2,
  },
  linkContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  linkText: {
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.regular,
    color: COLORS.dark,
    textDecorationLine: "underline",
  },
  optionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    alignItems: "center",
    marginBottom: 40,
    marginTop: 40,
  },
  lines: {
    height: 1,
    width: "30%",
    backgroundColor: COLORS.lightGrey,
  },
  optionText: {
    fontFamily: FONT.regularPoppins,
    color: COLORS.lightGrey,
    fontSize: SIZES.regular,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  accountText: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    fontFamily: FONT.mediumPoppins,
    textAlign: "center",
    marginTop: 30,
    fontSize: SIZES.regular,
  },
  indicatorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  indicatorText: {
    fontFamily: FONT.mediumPoppins,
    color: COLORS.darkGrey,
  },
  indicatorWrapper: {
    flexDirection: "row",
    gap: 5,
  },
  indicator: {
    width: 30,
    height: 5,
    borderRadius: 5,
    backgroundColor: COLORS.grey,
  },
  weak: (strength) => {
    switch (strength) {
      case "weak":
        return { backgroundColor: COLORS.danger };
      case "medium":
        return { backgroundColor: COLORS.danger };
      case "strong":
        return { backgroundColor: COLORS.danger };
      case "":
        return { backgroundColor: COLORS.grey };
    }
  },
  medium: (strength) => {
    switch (strength) {
      case "weak":
        return { backgroundColor: COLORS.grey };
      case "medium":
        return { backgroundColor: COLORS.warm };
      case "strong":
        return { backgroundColor: COLORS.warm };
      case "":
        return { backgroundColor: COLORS.grey };
    }
  },
  strong: (strength) => {
    switch (strength) {
      case "weak":
        return { backgroundColor: COLORS.grey };
      case "medium":
        return { backgroundColor: COLORS.grey };
      case "strong":
        return { backgroundColor: COLORS.success };
      case "":
        return { backgroundColor: COLORS.grey };
    }
  },
  otpInput: {
    width: "80%",
    height: 50,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
  otpInputField: {
    width: 50,
    height: 50,
    fontFamily: FONT.regularPoppins,
    fontSize: SIZES.regular,
    backgroundColor: COLORS.light,
    color: COLORS.miniDarkGrey,
    borderWidth: 1,
    borderRadius: SIZES.xSmall,
    paddingLeft: SIZES.medium,
    paddingRight: SIZES.medium,
  },
  otpInputHighlight: {
    borderWidth: 2,
    borderColor: COLORS.primary,
  },
  pinCodeTextStyle: {
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.large,
    color: COLORS.dark,
  },
  focusStick: {
    backgroundColor: COLORS.primary,
  },
  loaderContainer: {
    width: "100%",
    marginTop: SIZES.small,
    padding: SIZES.small,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.grey,
    borderRadius: SIZES.large,
  },
});

export default styles;
