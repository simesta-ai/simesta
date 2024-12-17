import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";

const styles = StyleSheet.create({
  dark: {
    container: {
      backgroundColor: DARKMODECOLORS.dark,
    },
    emptyBar: {
      backgroundColor: DARKMODECOLORS.grey,
    },
    courseTitle: {
      color: DARKMODECOLORS.light,
    },
    tabBtn: (name, activeTab) => ({
        backgroundColor: name === activeTab ? DARKMODECOLORS.light : DARKMODECOLORS.grey,
        borderColor: DARKMODECOLORS.grey,
    }),
    tabBtnText: (name, activeTab) => ({
        color: name === activeTab ? DARKMODECOLORS.dark : DARKMODECOLORS.miniDarkGrey,
    }),
  },
  light: {
    container: {
      backgroundColor: COLORS.backgroundGrey,
    },
    emptyBar: {
      backgroundColor: COLORS.grey,
    },
    courseTitle: {
      color: COLORS.dark,
    },
    tabBtn: (name, activeTab) => ({
        backgroundColor: name === activeTab ? COLORS.dark : "transparent",
        borderColor: COLORS.grey,
        color: name === activeTab ? COLORS.light : COLORS.grey,
    }),
    tabBtnText: (name, activeTab) => ({
        color: name === activeTab ? COLORS.light : COLORS.grey,
    }),
  },
  container: {
    flex: 1,
    paddingLeft: SIZES.small,
    paddingRight: SIZES.small,
    paddingTop: SIZES.xxLarge,
    paddingBottom: 100,
    fontFamily: FONT.regularPoppins,
    gap: 20,
  },
  skeletonContainer: {
    flexDirection: "column",
    height: 800,
    padding: 10,
    alignItems: "center",
    gap: 20,
  },
  infoSkeleton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    alignItems: "center",
  },
  nameSkeleton: {
    gap: 10,
  },
  overViewContainer: {
    flexDirection: "row",
    gap: 20,
    // justifyContent: "center",
    alignItems: "center",
  },
  courseImageContainer: {
    width: 80,
    height: 80,
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  courseImage: {
    width: "100%",
    height: "100%",
  },
  courseNameAndProgress: {
    flexDirection: "column",
    gap: 5,
    width: "70%",
  },
  courseTitle: {
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.large,
  },
  barContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  emptyBar: {
    width: "100%",
    height: 7,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
  },
  activeBar: (value) => ({
    width: `${value}%`,
    height: 7,
    backgroundColor: COLORS.progress,
    borderRadius: 10,
  }),
  completedText: {
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.regular,
    color: COLORS.lightGrey,
  },
  tabsWrapper: {
    flexDirection: "row",
    // gap: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  tabBtn: (name, activeTab) => ({
    borderRadius: 50,
    padding: 5,
    width: 120,
    borderWidth: 1,
  }),
  tabBtnText: (name, activeTab) => ({
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.small,
    textAlign: "center",
  }),
});

export default styles;
