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
    greeting: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.xLarge,
        color: COLORS.dark
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
    courseCardContainer: (type) => ({
        position: "relative",
        width: type === "dashboard" ? 200 : type === "course-page" ? 170 : 150,
        borderColor: COLORS.grey,
        borderWidth: 2,
        borderRadius: 10,
        padding: 20,
        // gap: 5,
    }),
    imageContainer: {
        width: 50,
        height: 50,
        borderRadius: 50,
        // backgroundColor: COLORS.grey,
        overflow: 'hidden',
        marginBottom: 10
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
    topicsCompleted: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.small,
        color: COLORS.miniDarkGrey
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
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.small
    },
})

export default styles