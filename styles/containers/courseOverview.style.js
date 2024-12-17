import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";

const styles = StyleSheet.create({
  dark: {
    descriptionText: {
      color: DARKMODECOLORS.light,
    },
    topicName: {
      color: DARKMODECOLORS.light,
    },
    topicNameLocked: {
        color: DARKMODECOLORS.miniDarkGrey,
    },
    topicContainer: (completed, inprogress) => ({
      borderColor:
        !completed && !inprogress ? DARKMODECOLORS.grey : DARKMODECOLORS.dark,
        backgroundColor:
        !completed && !inprogress ? DARKMODECOLORS.dark : DARKMODECOLORS.grey,
    }),
  },
  light: {},
  container: {
    flexDirection: "column",
    gap: 20,
    paddingRight: 10,
    paddingLeft: 10,
    marginTop: 10,
  },
  descriptionContainer: {
    borderRadius: SIZES.medium,
    // padding: SIZES.large,
    gap: 5,
  },
  descriptionHeader: {
    fontFamily: FONT.semiBoldPoppins,
    color: COLORS.primary,
    fontSize: SIZES.regular,
  },
  descriptionText: {
    fontFamily: FONT.regularPoppins,
    color: COLORS.miniDarkGrey,
    fontSize: SIZES.regular,
  },
  subHeader: {
    fontFamily: FONT.semiBoldPoppins,
    color: COLORS.lightGrey,
    fontSize: SIZES.regular,
    marginBottom: 10,
  },
  topicContainer: (completed, inprogress) => ({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    borderColor: !completed && !inprogress ? COLORS.grey : COLORS.dark,
    borderWidth: 1,
    borderRadius: SIZES.small,
  }),
  topicName: {
    fontFamily: FONT.mediumPoppins,
    color: COLORS.dark,
    fontSize: SIZES.medium,
  },
  topicNameLocked: {
    fontFamily: FONT.mediumPoppins,
    color: COLORS.grey,
    fontSize: SIZES.medium,
  },
});

export default styles;
