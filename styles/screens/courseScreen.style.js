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
        paddingBottom: 10,
        paddingTop: 10
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
    },
    barContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    emptyBar: {
        width: 100,
        height: 10,
        backgroundColor: COLORS.grey,
        borderRadius: 10
    },
    activeBar: (value) => ({
        width: value,
        height: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10
    }),
    progressText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.small,
        color: COLORS.dark
    }


})

export default courseStyles;