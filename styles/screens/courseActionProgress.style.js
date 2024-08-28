import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5,
        paddingTop: 200
    },
    progressContainer: {
        justifyContent: "center",
        alignItems: "center",
    },
    progressValue:{
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.xxLarge
    },
    createCourseButton: {
        padding: 10
    },
    progressDescription: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark,
        marginTop: 10

    },
    linkText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.primary
    },
    subText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.regular,
        color: COLORS.lightGrey
    }
})

export default styles;