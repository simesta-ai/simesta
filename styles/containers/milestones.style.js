import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 10,
        backgroundColor: COLORS.vLightGrey,
        borderRadius: 20,
        borderColor: COLORS.lightGrey,
        borderWidth: 0,
        flexDirection: "column",
        gap: 10,
    },
    header: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark
    },
    milestoneContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    milestoneText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark,
    },
    checkContainer: (completed, type) => ({
        width: 20,
        height: 20,
        borderRadius: 15,
        borderColor: completed && type === "dashboard-check" ? COLORS.dark : completed && type === "complete-check" ? COLORS.progress : COLORS.dark,
        borderWidth: 2,
        backgroundColor: completed  && type === "dashboard-check" ? COLORS.dark : completed  && type === "complete-check" ? COLORS.progress : null,
        justifyContent: "center",
        alignItems: "center",
    }),
    
    
})

export default styles