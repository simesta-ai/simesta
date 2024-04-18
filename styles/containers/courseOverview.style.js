import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        gap: 20,
        marginTop: 10
    },
    descriptionContainer: {
        backgroundColor: COLORS.grey,
        borderRadius: SIZES.medium,
        padding: SIZES.large,
        gap: 5
    },
    descriptionHeader: {
        fontFamily: FONT.semiBoldPoppins,
        color: COLORS.primary,
        fontSize: SIZES.regular
    },
    descriptionText: {
        fontFamily: FONT.regularPoppins,
        color: COLORS.dark,
        fontSize: SIZES.regular
    },
    subHeader: {
        fontFamily: FONT.semiBoldPoppins,
        color: COLORS.lightGrey,
        fontSize: SIZES.regular
    }
})

export default styles