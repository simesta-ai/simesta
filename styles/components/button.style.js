import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from "../../constants";

const styles = StyleSheet.create({
  container: (type) => {
    switch (type) {
      case "form-action-btn":
        return {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 100,
          marginTop: type == "form-action-btn" ? 0 : 0,
        };
      case "submit-answer-btn":
        return {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.light,
          borderRadius: 10,
          borderTopWidth: 2,
          borderBottomWidth: 5,
          borderRightWidth: 2,
          borderLeftWidth: 2,
          borderColor: COLORS.miniDarkGrey
        }
      case "accent-btn":
        return {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 100,
          marginTop: 0,
        };
      case "social-login-btn":
        return {
          width: "100%",
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          borderColor: COLORS.lightGrey,
        };
      case "course-cancel-btn":
        return {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.dark,
          borderRadius: 50,
        };
      case "course-delete-btn":
        return {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.danger,
          borderRadius: 50,
        };
      case "course-save-btn":
        return {
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 50,
        };
      case "create-course-btn":
        return {
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.primary,
          borderRadius: 100,
          marginTop: type == "form-action-btn" ? 10 : 0,
        };
      case "reload-btn":
        return {
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          backgroundColor: COLORS.danger,
          borderRadius: 100,
          marginTop: type == "form-action-btn" ? 10 : 0,
        };
      case "neutral-btn":
        return {
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 10,
          paddingRight: 40,
          paddingLeft: 40,
          borderColor: COLORS.dark,
          borderWidth: 1,
          backgroundColor: COLORS.light,
          borderRadius: 100,
          marginTop: type == "form-action-btn" ? 10 : 0,
        };
      case "round-accent-btn":
        return {
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        };
      case "round-accent-btn-big":
        return {
          width: 50,
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        };
      
      case "upload-file-btn":
        return {
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 7,
          width: 150,
          backgroundColor: COLORS.dark,
          borderRadius: 100,
        };
    }
  },

  buttonText: (type) => ({
    fontFamily: FONT.mediumPoppins,
    color: type === "neutral-btn" ? COLORS.dark : type ===  "submit-answer-btn" ? COLORS.dark :COLORS.light,
    fontSize: SIZES.regular,
  }),
  socialButton: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    gap: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.light,
    borderRadius: 10,
    borderColor: COLORS.miniLight,
    borderWidth: 1,
    borderBottomWidth: 4
  },
  socialBtnText: {
    fontFamily: FONT.mediumPoppins,
    color: COLORS.dark,
    fontSize: SIZES.regular,
  },
  roundAccentButton: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: COLORS.darkGrey,
    borderRadius: 50,
  },
  IconTextButtonContainer: (type) => {
    switch (type) {
      case "black-btn-small":
        return {
          flexDirection: "row",
          gap: 10,
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: 7,
          width: 150,
          backgroundColor: COLORS.dark,
          borderRadius: 100,
        };
    }
  },
  IconTextButtonText: (type) => {
    switch (type) {
      case "black-btn-small":
        return {
          fontFamily: FONT.mediumPoppins,
          color: COLORS.light,
          fontSize: SIZES.regular,
        };
    }
  },
});

export default styles;
