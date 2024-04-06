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
                    padding: 15,
                    backgroundColor: COLORS.primary,
                    borderRadius: 100,
                    marginTop: type == "form-action-btn" ? 10 : 0
                }
            case "social-login-btn":
                return {
                    width: 50,
                    height: 50,
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    borderColor: COLORS.dark
                }
        }
    },
    
    buttonText: {
        fontFamily: FONT.mediumPoppins,
        color: COLORS.light,
        fontSize: SIZES.medium
    },
    socialButton: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: COLORS.light,
        borderRadius: 50,
        borderColor: COLORS.dark,
        borderWidth: 1
    }
});

export default styles;

