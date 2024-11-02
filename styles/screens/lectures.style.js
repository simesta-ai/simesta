import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.backgroundGrey,
        paddingLeft: SIZES.small,
        paddingRight: SIZES.small,
        paddingTop: SIZES.large,
        paddingBottom: 100,
        fontFamily: FONT.regularPoppins,
        gap: 10
    },
    lectureLoader: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.backgroundGrey
    },
    lectureHeaderCon: {
        padding: 10,
        gap: 10
    },
    lectureLoaderText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark,
        backgroundColor: COLORS.vLightGrey,
        padding: 20,
        borderRadius: SIZES.small
    },
    startCourseContainer: {
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingTop: 100,
        flex: 1,
        backgroundColor: COLORS.backgroundGrey
    },
    startButtonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
        padding: 20
    },
    startLectureImage: {
        width: 250,
        height: 250,
    },
    headerText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark,
        textAlign:"center",
        paddingTop: 20
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
    courseImageContainer: {
        width: "100%",
        height: 150,
        borderRadius: SIZES.small,
        overflow: "hidden"
    },
    courseImage: {
        width: "100%",
        height: "100%"
    },
    overviewText: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    overviewHeader: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark
    },
    numberOfLectures: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.lightGrey
    },
    lectureContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 20,
        borderColor: COLORS.grey,
        borderWidth: 1,
        borderRadius: SIZES.small
    },
    positionContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.small
    },
    positionText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.medium,
        color: COLORS.light
    },
    lectureDetailsContainer: {
        width: "80%",
        flexDirection: "column",
        gap: 5,

    },
    lectureNameContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    lectureName: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark
    },
    durationContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5
    },
    durationText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.regular,
        color: COLORS.lightGrey
    },
    estimationTimeText: {
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark
    },
    lectureContentText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,
        color: COLORS.darkGrey
    },
    image: {
        width: "100%",
        height: 200

    },
    hangingButton: {
        padding: 15,
        position: "absolute",
        right: 0,
        bottom: 100,
        justifyContent: "flex-end",
        flexDirection: "row",
        zIndex: 20,
        // right: -300
    },
    hangingButtonSnd: {
        padding: 15,
        position: "absolute",
        bottom: 20,
        zIndex: 20,
        right: 0,
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    hangingButtonSpeak: {
        padding: 15,
        position: "absolute",
        bottom: 180,
        zIndex: 20,
        right: 0,
        justifyContent: "flex-end",
        flexDirection: "row",
    },
    markedContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        padding: 10,
        backgroundColor: COLORS.grey,
        borderRadius: 50
    },
    completedText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.regular,
        color: COLORS.dark
    },
    videoScreenContainer: {
        width: "100%",
        height: "110%",
        position: "absolute",
        backgroundColor: COLORS.dark,
        zIndex: 100,
        opacity: 0.9,
        // paddingTop: 200
        alignItems: "center",
        justifyContent: "center"
        
    },
    closeButton: {
        position: "absolute",
        top: 50,
        right: 20,
        padding: 15,
        backgroundColor: COLORS.dark,
        borderRadius: 50
    },
    videoContainer: {
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    // youtubeVideo: {
    //     width: "100%",
    //     height: 300,
    //     opacity: 1
    // },
    videoLectureText: {
        fontFamily: FONT.semiBoldPoppins,
        fontSize: SIZES.large,
        color: COLORS.light,
        textAlign: "center",
        padding: 20
    },
    buttonContainers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 20,
        padding: 20
    },
    loaderContainer: {
        position: "absolute",
        zIndex: 200,
        top: 200,
        height: 300,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    },
    chatBoxContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        paddingRight: 15,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 5,
        backgroundColor: COLORS.light,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },

    // Progress bar that is sectioned
    
    barContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 10
    },
    emptyBar: {
        width: "25%",
        height: 9,
        backgroundColor: COLORS.grey,
        borderRadius: 10
    },
    edgeEmptyBar: {
        width: "15%",
        height: 9,
        backgroundColor: COLORS.grey,
        borderRadius: 10
    },
    activeBar: (value) => ({
        maxWidth: value,
        height: 9,
        backgroundColor: COLORS.progress,
        borderRadius: 10,
    }),
    edgeActiveBar: (value) => ({
        maxWidth: value / 1.7,
        height: 9,
        backgroundColor: COLORS.progress,
        borderRadius: 10
    }),
    ideaContent: {
        padding: 10,
        gap: 20,
        justifyContent: 'center',
    },
    mcqContainer: {
        padding: 10,
        gap: 5,
        justifyContent: 'center',
    },
    mcqIntroText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,
        color: COLORS.lightGrey,
        paddingTop: 5,
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 20,
        backgroundColor: COLORS.vLightGrey,
        maxWidth: 150,
        borderRadius: 50
    },
    mcQuestion: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,

    },
    optionCon: (selected) => ({
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: 10,
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: selected ? COLORS.transProgress : "transparent",
        borderWidth: 2,
        borderRadius: 10,
        borderColor: selected ? COLORS.progress : "transparent"
    }),
    optionText: (selected) => ({
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.medium,
        color: selected ? COLORS.progress : COLORS.dark,
        maxWidth: "90%"
    }),
    radioBtnCon: (selected) => ({
        width: 25,
        height: 25,
        position: "relative",
        borderWidth: 2,
        borderColor: selected ? COLORS.progress : COLORS.lightGrey,
        borderRadius: 50
    }),
    radioBtn: (active) => ({
        width: 12,
        height: 12,
        position: "absolute",
        backgroundColor: active ? COLORS.progress : "transparent" ,
        borderRadius: 50,
        top: 4.5,
        left: 4.5
    }),
    submitQuizCon: {
        paddingLeft: 50,
        paddingTop: 30,
        paddingRight: 50
    },
    answerCon: {
        padding: 15,
        gap: 20,
        // backgroundColor: COLORS.vLightGrey,
        // borderRadius: 10,
    },
    answerText: {
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.medium,
        color: COLORS.dark
    },
    textArea: {
        marginTop: 20,
        height: 100,
        borderColor: COLORS.vLightGrey,
        borderWidth: 2,
        borderRadius: 10,
        padding: 15,
        color: COLORS.dark,
        fontFamily: FONT.regularPoppins,
        fontSize: SIZES.medium,
        textAlignVertical: 'top', // For Android, ensures the text is at the top
      },
      chatBox: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        paddingBottom: 20
      },
      chatContainer: {
        flexDirection: "column",
        position: "relative",
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 85,
        height: "100%",
      },
      chatWrapper: {
        paddingBottom: 100
      },
      speakingContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 100,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        borderRadius: 10
      },
      bottomView: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
      },
      speakingText: {
        color: COLORS.dark,
        fontFamily: FONT.mediumPoppins,
        fontSize: SIZES.regular,
      }
      
    
    
    
})

export default styles;