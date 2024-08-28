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
        gap: 10
    },
    headerText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.large,
        color: COLORS.dark,
        textAlign:"center",
        padding: 20
    },
    formContainer: {
        paddingTop: 10,
        gap: 20
    },
    fieldSection: {
        marginBottom: 20,
        gap: 10

    },
    label: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark,
    },
    subText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.small,
        color: COLORS.lightGrey,
    },
    defaultText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.small,
        color: COLORS.lightGrey,
        textAlign: "center"
    },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 10
    },
    createCourseButton: {
        padding: 10
    },
    bottomButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        marginTop: 10,
        padding: 10
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center"
    },
    titleText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,
        color: COLORS.lightGrey,
    },
    topicsWrapper: {
        marginTop: 20,
    },
    topics: {
        marginTop: 10,
        gap: 15,
    },
    topicContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        backgroundColor: COLORS.light,
        padding: 15,
        borderRadius: 10,
        borderColor: COLORS.grey,
        borderWidth: 1,
    },
    editTopicButton: {
        backgroundColor: COLORS.warm,
        height: 25,
        width: 25,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50
    },
    topicText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark,
    },
    addTopicButton: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        gap: 10,
        marginTop: 20,
        padding: 10
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: COLORS.dark
    },
    uploadedFilesContainer: {
        flexDirection: "column",
        gap: 10,

    },
    fileUploadContainer: {
        gap: 10
    },
    fileContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 12,
        borderBottomWidth: 1,
        borderColor: COLORS.vLightGrey
    },
    fileName: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10
    },
    deleteFileBtn: {
        backgroundColor: COLORS.warm,
        width: 23,
        height: 23,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    uploadContainer: {
        padding: 20,
        alignItems: "center",
        borderWidth: 0,
        borderColor: COLORS.grey,
        backgroundColor: COLORS.vLightGrey,
        borderRadius: 10,
        marginTop: 10,
        gap: 15,
        borderStyle: "dashed"
    },
    fileUploadInstruction: {
        alignItems: "center"
    },
    toastMessage: {
        zIndex: 30,
        backgroundColor: COLORS.light
    },
    uploadButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    },
    progressContainer: {
        marginTop: 200,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    emptyBar: {
        overflow: "hidden",
        width: "85%",
        height: 4,
        backgroundColor: COLORS.grey,
        borderRadius: 5
    },
    activeBar: (value) => ({
        width: `${value}%`,
        height: 4,
        backgroundColor: COLORS.dark,
        borderRadius: 5
    }),
    
    
    
    
})
export default styles;

