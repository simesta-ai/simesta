import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from '../../constants'

const styles = StyleSheet.create({
    dark: {
        container: {
            backgroundColor: "rgba(118, 45, 237, 0.1)"
        },
        greeting: {
            color: DARKMODECOLORS.light
        },
        courseTitle: {
            color: DARKMODECOLORS.light
        },
        topicsCompleted: {
            color: DARKMODECOLORS.light
        },
        featureText: {
            color: DARKMODECOLORS.light
        }
    },
    light: {
        container: {
            backgroundColor: "rgba(118, 45, 237, 0.1)"
        },
        courseTitle: {
            color: COLORS.dark
        },
        greeting: {
            color: COLORS.dark
        },
        topicsCompleted: {
            color: COLORS.miniDarkGrey
        },
        featureText: {
            color: COLORS.darkGrey
        }
    },
    container: {
        width: 300,
        borderColor: COLORS.lightPrimary,
        backgroundColor: COLORS.light,
        borderWidth: 2,
        borderBottomWidth: 7,
        paddingTop: 20,
        paddingBottom: 20,
        paddingLeft: 30,
        paddingRight: 30,
        borderRadius: 20,
        gap: 10,
    },
    wrapper: {
        width: "100%",
        gap: 10,
    },
    greeting: {
        fontFamily: FONT.boldPoppins,
        fontSize: SIZES.large,
        color: COLORS.dark
    },
    courseTitle: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark
    },
    topicsCompleted: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.small,
        color: COLORS.miniDarkGrey
    },
    featuresContainer: {
        flexDirection: "row",
        justifyContent:  "space-between",
        alignItems: "center",
        gap: 10
    },
    feature: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 2
    },
    featureText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.xSmall,
        color: COLORS.darkGrey,
    }
})

export default styles;