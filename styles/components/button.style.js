import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES, SHADOWS } from '../../constants'

const styles = StyleSheet.create({
    container: (type) => {
        switch (type) {
            case "form-action-btn":
                return {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: COLORS.primary,
                    borderRadius: 100,
                    marginTop: type == "form-action-btn" ? 10 : 0
                }
            case "accent-btn":
                return {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: COLORS.primary,
                    borderRadius: 100,
                    marginTop: 0
                }
            case "social-login-btn":
                return {
                    width: "100%",
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderColor: COLORS.dark
                }
            case "course-cancel-btn":
                return {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: COLORS.dark,
                    borderRadius: 50,
                }
            case "course-save-btn":
                return {
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: COLORS.primary,
                    borderRadius: 50,
                }
            case "create-course-btn":
                return {
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: COLORS.primary,
                    borderRadius: 100,
                    marginTop: type == "form-action-btn" ? 10 : 0
                }
            case "reload-btn":
                return {
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10,
                    backgroundColor: COLORS.danger,
                    borderRadius: 100,
                    marginTop: type == "form-action-btn" ? 10 : 0
                }
            case "neutral-btn":
                return {
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: 10,
                    paddingRight: 40,
                    paddingLeft: 40,
                    borderColor: COLORS.dark,
                    borderWidth: 1,
                    backgroundColor: COLORS.light,
                    borderRadius: 100,
                    marginTop: type == "form-action-btn" ? 10 : 0
                }
            case "round-accent-btn":
                return {
                    width: 40,
                    height: 40,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    
                }
            case "round-accent-btn-big":
                return {
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    
                }
        }
    },
    
    buttonText: (type) => ({
        fontFamily: FONT.mediumPoppins,
        color: type === "neutral-btn" ? COLORS.dark : COLORS.light,
        fontSize: SIZES.regular
    }),
    socialButton: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
        gap: SIZES.small,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.light,
        borderRadius: 50,
        borderColor: COLORS.dark,
        borderWidth: 1
    },
    socialBtnText: {
        fontFamily: FONT.mediumPoppins,
        color: COLORS.dark,
        fontSize: SIZES.regular,
        
    },
    roundAccentButton: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: COLORS.primary,
        borderRadius: 50,
    },
});

export default styles;

