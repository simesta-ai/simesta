import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        padding: 15,
        marginTop: 10,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.regular,
        flexDirection: "column",
        gap: 10,
    },
    header: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.light
    },
    milestoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    milestoneText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.light,
    },
    checkContainer: (completed) => ({
        width: 20,
        height: 20,
        borderRadius: 15,
        borderColor: completed ? COLORS.light : COLORS.light,
        borderWidth: 2,
        backgroundColor: completed ? COLORS.light : null,
        justifyContent: "center",
        alignItems: "center",
    }),
    
    
})

export default styles