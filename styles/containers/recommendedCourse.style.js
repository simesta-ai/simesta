import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderColor: COLORS.lightGrey,
        backgroundColor: COLORS.light,
        borderWidth: 0.5,
        padding: 20,
        borderRadius: 7,
        gap: 10
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
    },
    feature: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    },
    featureText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.small,
        color: COLORS.darkGrey,
    }
})

export default styles;