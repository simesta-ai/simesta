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
        borderWidth: 1,
        gap: 10,
        borderRadius: SIZES.small
    },
    searchButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.light,
        height: 30,
        width: 30
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