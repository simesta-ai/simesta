import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: SIZES.medium,
        paddingRight: SIZES.medium,
        fontFamily: FONT.regularPoppins,
        backgroundColor: COLORS.backgroundGrey,
        paddingTop: SIZES.medium,
        
    },
    cancelBtn: {
        position: "absolute",
        justifyContent: "center",
        alignItems: "center",
        top: 10,
        zIndex: 100,
        right: 20,
        padding: 10,
        borderRadius: 100,
        backgroundColor: COLORS.vLightGrey
    },
    chatHeaderText: {
        fontSize: SIZES.xxLarge,
        fontFamily: FONT.mediumPoppins,
        color: COLORS.miniDarkGrey,
    },
    chatDescription: {
        fontSize: SIZES.small,
        fontFamily: FONT.regularPoppins,
        color: COLORS.lightGrey,
        marginBottom: SIZES.medium,
    },
    simestaChat: {
        flexDirection: 'row',
        marginTop: SIZES.medium,
    },
    simestaChatImage: {
        width: 40,
        height: 40,
        transform: [{ translateY: -7}]
    },
    simestaChatImageLoading: {
        width: 40,
        height: 40,
    },
    chatMessage: {
        fontSize: SIZES.regular,
        fontFamily: FONT.regularPoppins,
        color: COLORS.darkGrey,
        marginLeft: SIZES.medium,
        maxWidth: "80%"
    },
    userChat: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        marginTop: 10,
    },
    userChatMessage: {
        backgroundColor: COLORS.vLightGrey,
        padding: SIZES.small,
        borderRadius: 10,
        maxWidth: '80%',
    },
    chatAndVoiceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
        gap: 10
    },
    chatInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: COLORS.vLightGrey,
        gap: SIZES.small,
        borderRadius: 50,
        paddingLeft: SIZES.medium,
        padding: 5,
        flex: 1
    },
    chatInput: {
        padding: 10,
        fontFamily: FONT.regularPoppins,
        backgroundColor: "transparent",
        flex: 1,
    },
    inputMicButton: {
        padding: SIZES.regular,
        borderRadius: 50,
    },
    voiceContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        padding: 50,
        gap: SIZES.xxLarge,
    },
    soundIndicator: {
        width: 20,
        height: 20,
        backgroundColor: COLORS.darkGrey,
        borderRadius: 50,
    },
    voiceNoteText: {
        fontSize: SIZES.small,
        fontFamily: FONT.regularPoppins,
        color: COLORS.darkGrey,
    },
    stopRecordingText: {
        fontSize: SIZES.small,
        fontFamily: FONT.regularPoppins,
        color: COLORS.darkGrey,
    },
    voiceIconContainer: {
        padding: SIZES.small,
        borderRadius: 50,
        backgroundColor: COLORS.vLightGrey,
        gap: 10,
        flexDirection: "row"
    },
    chatLoaderContainer: {
        flexDirection: "row",
        alignItems: 'center',
        borderRadius: 50,
        gap: 10
    },
    
    
    
    
    
})

export default styles;