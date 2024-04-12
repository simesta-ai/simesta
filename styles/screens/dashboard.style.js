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
    notificationWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 10
    },
    notIconContainer: {
        justifyContent: 'center',
        alignItems: "center"
    },
    notificationIcon: {
        color: COLORS.dark
    },
    notificationAlert: {
        position: 'absolute',
        top: 2,
        right: 2,
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: COLORS.danger,
        zIndex: 2

    }
    })

export default styles;