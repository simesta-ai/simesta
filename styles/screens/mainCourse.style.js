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
        gap: 20,
        marginTop: 10,
    },
    overViewContainer: {
        flexDirection: "row",
        gap: 20,
        // justifyContent: "center",
        alignItems: "center"
    },
    courseImageContainer: {
        width: 80,
        height: 80,
        borderRadius: 50,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    },
    courseImage: {
        width: "100%",
        height: "100%"
    },
    courseNameAndProgress: {
        flexDirection: "column",
        gap: 5,
        width: "70%"
    },
    courseTitle:{
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.large
    },
    barContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    emptyBar: {
        width: "100%",
        height: 7,
        backgroundColor: COLORS.grey,
        borderRadius: 10
    },
    activeBar: (value) => ({
        width: value.toString() + "%",
        height: 7,
        backgroundColor: COLORS.progress,
        borderRadius: 10
    }),
    completedText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.regular,
        color: COLORS.lightGrey
    },
    tabsWrapper: {
        flexDirection: "row",
        // gap: 15,
        alignItems: "center",
        justifyContent: "space-between",
    },
    tabBtn: (name, activeTab) => ({
        backgroundColor: name === activeTab ? COLORS.dark : COLORS.light,
        borderRadius: 50,
        padding: 5,
        width: 105,
        borderWidth: 1,
        borderColor: COLORS.dark
      }),
    tabBtnText: (name, activeTab) => ({
    fontFamily: FONT.mediumPoppins,
    fontSize: SIZES.small,
    textAlign: 'center',
    color: name === activeTab ? COLORS.light : COLORS.dark,
    }),
})

export default styles;