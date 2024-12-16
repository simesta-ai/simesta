import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS, DARKMODECOLORS } from '../../constants'

const styles = StyleSheet.create({
    dark: {
        container: {
            backgroundColor: DARKMODECOLORS.grey
        },
        searchField: {
            color: DARKMODECOLORS.light
        },
        searchMainContainer: {
            backgroundColor: DARKMODECOLORS.dark,
            borderBottomColor: DARKMODECOLORS.grey
        },
        category: {
            backgroundColor: DARKMODECOLORS.dark
        },
        categoryText: {
            color: DARKMODECOLORS.light
        },
        categoryContainer: {
            backgroundColor: DARKMODECOLORS.grey
        },
        courseResultCon: {
            borderBottomColor: DARKMODECOLORS.grey
        },
        courseTitle: {
            color: DARKMODECOLORS.light
        },
        courseDesc: {
            color: DARKMODECOLORS.light
        }
    },
    light: {
        container: {
            backgroundColor: COLORS.vLightGrey
        },
        searchField: {
            color: COLORS.dark
        },
        searchMainContainer: {
            backgroundColor: COLORS.light,
            borderBottomColor: COLORS.grey
        },
        category: {
            backgroundColor: COLORS.grey
        },
        categoryText: {
            color: COLORS.dark
        },
        categoryContainer: {
            backgroundColor: COLORS.vLightGrey
        },
        courseResultCon: {
            borderBottomColor: COLORS.grey
        },
        courseTitle: {
            color: COLORS.dark
        },
        courseDesc: {
            color: COLORS.dark
        }
    },
    container: {
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 10,
        paddingLeft: 15,
        flexDirection: 'row',
        alignItems: 'center',
        fontFamily: FONT.regularPoppins,
        borderColor: COLORS.lightGrey,
        backgroundColor: COLORS.vLightGrey,
        borderWidth: 0,
        zIndex: 3,
        gap: 10,
        borderRadius: 50
    },
    searchButton: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
        gap: 10,
        height: 30,
    },
    searchLogo: {
        height: 30,
        width: 30
    },
    searchField: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        width: "75%",
        alignItems: "center",
        height: 30,
    },
    placeholderText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.lightGrey
    },
    
    searchMainContainer: {
        position: "absolute",
        width: "100%",
        minHeight: 750,
        gap: 15,
        padding: 10,
        paddingTop: 20,
        zIndex: 20,
        borderBottomWidth: 5
    },
    categoryContainer: {
        flexDirection: "row",
        alignItems: "center",
        padding: 10,
    },
    category: {
        borderRadius: 50,
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        height: 30,
        minWidth: 100
    },
    categoryText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.small,
    },
    courseResultCon: {
        flexDirection: "row",
        gap: 10,
        padding: 10,
        borderBottomWidth: 2,
        marginTop: 10
    },
    courseImage: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    courseTitle: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.small,
    },
    courseDesc: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.xSmall,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        width: 200
    },
    
    })

export default styles;