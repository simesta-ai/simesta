import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: SIZES.small,
        paddingRight: SIZES.small,
        paddingTop: SIZES.large,
        paddingBottom: 100,
        fontFamily: FONT.regularPoppins,
        gap: 10
    },
    headerText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark,
        textAlign:"center",
        padding: 25
    },
    courseImageContainer: {
        width: "100%",
        height: 150,
        borderRadius: SIZES.large,
        overflow: "hidden"
    },
    courseImage: {
        width: "100%",
        height: "100%"
    },
    overviewText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    overviewHeader: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark
    },
    numberOfLectures: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.lightGrey
    },
    lectureContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: SIZES.small
    },
    positionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.small
    },
    positionText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.light
    },
    lectureDetailsContainer: {
        width: "80%",
        flexDirection: "column",
        gap: 5,

    },
    lectureNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    lectureName: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark
    },
    durationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    durationText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.lightGrey
    },
    estimationTimeText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark
    },
    lectureContentText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark
    },
    hangingButton: {
        padding: 20,
        position: "absolute",
        width: "100%",
        bottom: 120,
        justifyContent: "flex-end",
        flexDirection: "row",
        // right: -300
    },
    markedContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 10,
        backgroundColor: COLORS.grey,
        borderRadius: 50
    },
    completedText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark
    }
    
    
})

export default styles;