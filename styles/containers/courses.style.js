import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'



const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        gap: 20,
        marginTop: 20
    },
    filterContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    filter: (activeType, item) => ({
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 20,
        paddingLeft: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.dark,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: activeType === item ? COLORS.dark : COLORS.light,
        ...SHADOWS.primary,
    }),
    filterText: (activeType, item) => ({
        color: activeType === item ? COLORS.light : COLORS.dark,
        fontFamily: FONT.semiBoldPoppins,
    }),
    courseCardContainer: {
        position: "relative",
        width: 200,
        borderColor: COLORS.grey,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        gap: 10,
    },
    imageContainer: {
        width: 100,
        height: 100,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    categoryText: (color) =>   ({
        color: color,
        fontFamily: FONT.boldPoppins,
        fontSize: SIZES.small,
    }),
    courseTitle:{
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
    },
    progressBarContainer: {
        position: "absolute",
        zIndex: 3,
        right: 10,
        top: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    progressValue: {
        fontFamily: FONT.semiBoldPoppins
    }
})

export default styles