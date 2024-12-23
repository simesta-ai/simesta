import { Dimensions, StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from '../../constants'



const styles = StyleSheet.create({
    dark: {
        container: {
            backgroundColor: DARKMODECOLORS.dark
        },
        greeting: {
            color: DARKMODECOLORS.light
        },
        notificationIcon: {
            color: DARKMODECOLORS.light
        },
        courseTitle:{
            color: DARKMODECOLORS.light
        },
        topicsCompleted: {
            color: DARKMODECOLORS.miniDarkGrey
        },
        startLearningText: {
            color: DARKMODECOLORS.light
        }
    },
    light: {
        container: {
            backgroundColor: COLORS.light
        },
        greeting: {
            color: COLORS.dark
        },
        notificationIcon: {
            color: COLORS.dark
        },
        courseTitle:{
            color: COLORS.dark
        },
        topicsCompleted: {
            color: COLORS.miniDarkGrey
        },
        startLearningText: {
            color: COLORS.dark
        }

    },
    container: {
        flexDirection: 'column',
        gap: 10,
    },
    filterContainer: {
        flexDirection: 'row',
        gap: 20,
    },
    greeting: {
        fontFamily: FONT.boldPoppins,
        fontSize: SIZES.large,
        color: COLORS.dark
    },
    skeleton: {
        marginTop: 15,
        flexDirection: 'row',
        gap: 20
    },
    recSkeleton: {
        flexDirection: 'column',
        gap: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    courseCategoryHeader: {
        display: "flex",
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    coursesList: {
        marginTop: 10,
    },
    seeAllAction: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.normal,
        color: COLORS.primary,
        textDecorationLine: "underline"
    },
    startLearningContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        borderRadius: 7,
        borderWidth: 0,
        // borderColor: COLORS.lightGrey
    },
    startLearningCtaContainer: {
        width: "50%",
        gap: 20,
        padding: 20
    },
    // animationContainer: {
    //     width: 50
    // },
    // startLearningPromptContainer: {
    //     padding: 15,
    // },
    // startLearningButtonContainer: {
    //     padding: 10,
    //     borderTopWidth: 0,
    //     borderColor: COLORS.lightGrey,
    // },
    startLearningText: {
        fontFamily: FONT.semiBoldPoppins,
        textAlign: "center",
        fontSize: SIZES.regular,
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
    courseCardContainer: (type, theme) => ({
        position: "relative",
        width: type === "dashboard" ? 200 : type === "course-page" ? Dimensions.get("window").width - 40 : 150,
        borderColor: 
            theme === "light" ? COLORS.grey : DARKMODECOLORS.grey,
        backgroundColor: 
            theme === "light" ? COLORS.light : DARKMODECOLORS.dark,
        borderWidth: 2.0,
        borderBottomWidth: 7,
        borderRadius: 20,
        padding: 15,
        gap: 5,
        marginBottom: 20
        
    }),
    imageContainer: {
        height: 100,
        borderRadius: 10,
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