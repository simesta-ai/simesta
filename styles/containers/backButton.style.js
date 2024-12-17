import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from '../../constants'

const styles = StyleSheet.create({
    dark: {
        iconContainer: {
            borderColor: COLORS.miniDarkGrey,
            backgroundColor: "rgba(255, 255, 255,0.1)",
        }
    },
    light: {
        iconContainer: {
            borderColor: COLORS.grey,
            backgroundColor: COLORS.light,
        }
    },
    container: {
        zIndex: 20,
        position: "absolute",
        top: 10,
        left: 15,
        justifyContent: "space-between",
        gap: 10
    },
    blank: {
        width: "80%"
    },
    iconContainer: {
        position: "relative",
        width: 40,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: COLORS.light,
    },
    icon: {
        top: 0,
        left: 3,
    }
    
})

export default styles;