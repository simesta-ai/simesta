import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from '../../constants'

const styles = StyleSheet.create({
    dark: {
        progressDescription: {
            color: DARKMODECOLORS.light
        }
    },
    light: {
        progressDescription: {
            color: COLORS.dark
        }
    },
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
        marginBottom: 100
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