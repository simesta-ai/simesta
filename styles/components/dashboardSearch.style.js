import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: FONT.regularPoppins,
        borderColor: COLORS.lightGrey,
        backgroundColor: COLORS.vLightGrey,
        borderWidth: 0,
        zIndex: 3,
        gap: 10,
        borderRadius: 50
    },
    searchButton: {
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        height: 30,
        width: 30
    },
    searchLogo: {
        height: 35,
        width: 35
    },
    searchField: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        width: "90%",
        color: COLORS.dark,
        alignItems: "center",
        height: 30,
        width: "85%"
    }
    })

export default styles;