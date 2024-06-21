import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    greeting: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.large,
        color: COLORS.dark
    },
    courseCategoryHeader: {
        display: "flex",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    seeAllAction: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.normal,
        color: COLORS.primary,
        textDecorationLine: "underline"
    },
    startLearningContainer: {
        marginTop: 10,
        backgroundColor: COLORS.light,
        borderRadius: 7,
        borderWidth: 0.5,
        borderColor: COLORS.lightGrey
    },
    startLearningPromptContainer: {
        padding: 15,
    },
    startLearningButtonContainer: {
        padding: 10,
        borderTopWidth: 0.5,
        borderColor: COLORS.lightGrey,
    },
    startLearningText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.normal,
        color: COLORS.dark
    },
    filter: (activeType, item) => ({
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.dark,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: activeType === item ? COLORS.dark : COLORS.light,
        ...SHADOWS.primary,
    }),
    filterText: (activeType, item) => ({
        color: activeType === item ? COLORS.light : COLORS.dark,
        fontFamily: FONT.semiBoldPoppins,
    }),
    courseCardContainer: (type) => ({
        position: "relative",
        width: type === "dashboard" ? 200 : type === "course-page" ? 170 : 150,
        borderColor: COLORS.grey,
        backgroundColor: COLORS.light,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: COLORS.lightGrey,
        padding: 20,
        // gap: 5,
    }),
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        // backgroundColor: COLORS.grey,
        overflow: 'hidden',
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    categoryText: (color) =>   ({
        color: color,
        fontFamily: FONT.boldPoppins,
        fontSize: SIZES.small,
    }),
    courseTitle:{
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
    },
    topicsCompleted: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.small,
        color: COLORS.miniDarkGrey
    },
    progressBarContainer: {
        position: "absolute",
        zIndex: 3,
        right: 10,
        top: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    progressValue: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.small
    },
})

export default styles