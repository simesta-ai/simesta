import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 16,
        paddingRight: 16,
        fontFamily: FONT.regularPoppins,
        backgroundColor: COLORS.backgroundGrey,
        paddingTop: SIZES.small,
        
    },
    barsWrapper: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        marginTop: 30,
        marginBottom: 20
    },
    bar: (width, opacity) => ({
        width: width,
        height: 7,
        backgroundColor: COLORS.primary,
        borderRadius: 5,
        opacity: opacity
    }),
    activeBar: {
        width: 70,
        height: 5,
        backgroundColor: COLORS.primary,
        borderRadius: 5
    },
    slideContainer: {
        flexDirection: "column",
    },
    slideTitleText: {
        width: 300,
        height: 250,
        marginTop: 30
    },
    slideTitle: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.xxLarge,
        color: COLORS.dark,
    },
    slideTitleColored: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.xxLarge,
        color: COLORS.primary,
    },
    imageContainer: {
        justifyContent: "center",
        alignItems: "center"
    },
    onboardImage: {
        width: 300,
        height: 300,
    }, 
    slideDescription: {
        marginTop: 40,
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark,
        textAlign: "center",
    }, 
    onboardButtons: {
        marginTop: 20,
        flexDirection: "column",
        gap: 30,
    },
    skipText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.primary,
        textAlign: "center",
    },
    
  
})

export default styles;