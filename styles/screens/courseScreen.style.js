import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const courseStyles = StyleSheet.create({
    coursePageContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: 10
    },
    filterContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    filter: (activeType, item) => ({
        alignItems: 'center',
        justifyContent: "center",
    }),
    filterText: (activeType, item) => ({
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: activeType === item ? COLORS.primary : COLORS.lightGrey,
    }),
    listContainer:{
        display: "flex",
        gap: 20
    }


})

export default courseStyles;