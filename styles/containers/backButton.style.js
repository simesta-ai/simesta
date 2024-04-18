import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        zIndex: 20,
        position: "absolute",
        top: 10,
        left: 10,
        justifyContent: "space-between",
        gap: 10
    },
    blank: {
        width: "80%"
    },
    iconContainer: {
        position: "relative",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: COLORS.light,
    },
    icon: {
        position: "absolute",
        top: 12,
        left: 17,
    }
    
})

export default styles;