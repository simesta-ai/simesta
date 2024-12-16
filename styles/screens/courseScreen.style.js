import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from "../../constants";

const courseStyles = StyleSheet.create({
  dark: {
    emptyBar: {
      backgroundColor: DARKMODECOLORS.grey,
    },
    courseTitle: {
      color: DARKMODECOLORS.light,
    },
    subHeaders: {
      color: DARKMODECOLORS.light,
    },
    continueCourseContainer: {
      backgroundColor: DARKMODECOLORS.dark,
      borderColor: DARKMODECOLORS.grey,
    },
    continueCourseICompletedTopics: {
      color: DARKMODECOLORS.light,
    },
    continueCourseTitle: {
      color: DARKMODECOLORS.light,
    },
    continueCourseDescription: {
      color: DARKMODECOLORS.light,
    },
    progressText: {
      color: DARKMODECOLORS.light,
    },
    addCourseText: {
      color: DARKMODECOLORS.light,
    },
  },
  light: {
    emptyBar: {
      backgroundColor: COLORS.grey,
    },
    courseTitle: {
      color: COLORS.dark,
    },
    subHeaders: {
      color: COLORS.dark,
    },
    continueCourseContainer: {
      backgroundColor: COLORS.light,
      borderColor: COLORS.vLightGrey,
    },
    continueCourseICompletedTopics: {
      color: COLORS.lightGrey,
    },
    continueCourseTitle: {
      color: COLORS.dark,
    },
    continueCourseDescription: {
      color: COLORS.dark,
    },
    progressText: {
      color: COLORS.dark,
    },
    addCourseText: {
      color: COLORS.dark,
    },
  },
  coursePageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  filterContainer: {
    flexDirection: "row",
    gap: 20,
    paddingBottom: 10,
    paddingTop: 10,
  },
  filter: (activeType, item) => ({
    alignItems: "center",
    justifyContent: "center",
  }),
  filterText: (activeType, item) => ({
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.regular,
    color: activeType === item ? COLORS.primary : COLORS.lightGrey,
  }),
  courseWrapper: {
    justifyContent: "center",
    padding: 5,
    gap: 10,
    paddingTop: 30,
  },
  continueCourseContainer: {
    padding: 20,
    borderColor: COLORS.vLightGrey,
    backgroundColor: COLORS.light,
    borderRadius: 20,
    marginBottom: 20,
    borderWidth: 1.3,
    gap: 10,
    justifyContent: "center",
  },
  continueCourseImage: {
    borderRadius: 10,
  },
  continueCourseICompletedTopics: {
    fontFamily: FONT.semiBoldPoppins,
    color: COLORS.lightGrey,
    textTransform: "uppercase",
    fontSize: SIZES.regular,
  },
  continueCourseTitle: {
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.regular,
    color: COLORS.dark,
  },
  continueCourseDescription: {
    fontFamily: FONT.regularPoppins,
    fontSize: SIZES.small,
    color: COLORS.dark,
  },
  subHeaders: {
    fontFamily: FONT.boldPoppins,
    fontSize: SIZES.large,
    color: COLORS.dark,
  },
  listContainer: {
    display: "flex",
    gap: 10,
  },
  barContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  emptyBar: {
    width: "85%",
    height: 7,
    backgroundColor: COLORS.grey,
    borderRadius: 10,
  },
  activeBar: (value) => ({
    width: value,
    height: 7,
    backgroundColor: COLORS.primary,
    borderRadius: 10,
  }),
  progressText: {
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.small,
    color: COLORS.dark,
  },
  addCourseText: {
    fontFamily: FONT.semiBoldPoppins,
    fontSize: SIZES.regular,
    color: COLORS.dark,
    marginBottom: 15,
  },
});

export default courseStyles;
