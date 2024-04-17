import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: SIZES.small,
        paddingRight: SIZES.small,
        paddingTop: SIZES.xxLarge,
        paddingBottom: 100,
        fontFamily: FONT.regularPoppins,
        gap: 10
    },
    greeting: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.xLarge,
        color: COLORS.dark
    },
})

export default styles;