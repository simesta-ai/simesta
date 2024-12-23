import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from '../../constants'

const styles = StyleSheet.create({
    dark: {
        container: {
            backgroundColor: DARKMODECOLORS.dark
        },
        greeting: {
            color: DARKMODECOLORS.light
        },
        notificationIcon: {
            color: DARKMODECOLORS.light
        }
    },
    light: {
        container: {
            backgroundColor: COLORS.light
        },
        greeting: {
            color: COLORS.dark
        },
        notificationIcon: {
            color: COLORS.dark
        }
    },
    container: {
        flex: 1,
        paddingLeft: SIZES.small,
        paddingRight: SIZES.small,
        paddingTop: SIZES.large,
        paddingBottom: 100,
        fontFamily: FONT.regularPoppins,
        gap: 20
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
        top: -2,
        right: -2,
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor: COLORS.primary,
        zIndex: 2

    }
    })

export default styles;