import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: SIZES.small,
        paddingRight: SIZES.small,
        paddingTop: SIZES.large,
        paddingBottom: 100,
        fontFamily: FONT.regularPoppins,
        gap: 20
    },
    headerText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.large,
        color: COLORS.dark,
        textAlign:"center",
    },
    noNotContainer: {
        paddingTop: 100,
        gap: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    noNotImage: {
        width: 200,
        height: 200,
    },
    noNotificationsText: {
        fontSize: SIZES.medium,
        fontFamily: FONT.semiBoldPoppins,
        color: COLORS.dark,
        textAlign: "center"
    },
    noNotTexBody: {
        fontSize: SIZES.regular,
        fontFamily: FONT.mediumPoppins,
        paddingLeft: 30,
        paddingRight: 30,
        color: COLORS.lightGrey,
        textAlign: "center"
    },
    skeletonContainer: {
        flexDirection: "column",
        backgroundColor: COLORS.backgroundGrey,
        height: 800,
        padding: 10,
        alignItems: "center",
        gap: 20
    },
    skeleton: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 20,
        alignItems: "center"
    },
})


export default styles