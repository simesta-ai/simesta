import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const courseStyles = StyleSheet.create({
    coursePageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    filterContainer: {
        flexDirection: 'row',
        gap: 20,
        paddingBottom: 10,
        paddingTop: 10
    },
    filter: (activeType, item) => ({
        alignItems: 'center',
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
        paddingTop: 20
    },
    continueCourseContainer: {
        padding: 20,
        borderColor: COLORS.lightGrey,
        backgroundColor: COLORS.light,
        borderRadius: 10,
        marginBottom: 20,
        borderWidth: 0.5,
        gap: 10,
        justifyContent: "center"
    },
    continueCourseImage: {
        borderRadius: 10,
    },
    continueCourseICompletedTopics: {
        fontFamily: FONT.semiBoldPoppins,
        color: COLORS.lightGrey,
        textTransform: "uppercase",
        fontSize: SIZES.regular
    },
    continueCourseTitle: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark
        },
    continueCourseDescription: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.small,
        color: COLORS.dark
    },
    subHeaders: {
        fontFamily: FONT.boldPoppins,
        fontSize: SIZES.large,
        color: COLORS.dark
    },
    listContainer:{
        display: "flex",
        gap: 10
    },
    barContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    emptyBar: {
        width: "85%",
        height: 7,
        backgroundColor: COLORS.grey,
        borderRadius: 10
    },
    activeBar: (value) => ({
        width: value,
        height: 7,
        backgroundColor: COLORS.primary,
        borderRadius: 10
    }),
    progressText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.small,
        color: COLORS.dark
    }


})

export default courseStyles;