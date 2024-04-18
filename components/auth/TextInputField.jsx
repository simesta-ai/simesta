import { useState } from "react";
import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "../../styles/auth/auth.style";
import { images, COLORS, SIZES } from "../../constants";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";

const TextInputField = ({ type, secureTextEntry, placeholder, onChange }) => {
  const [focused, setFocused] = useState(false);
  const [ view, setView ] = useState(false);
  const [ secureText, setSecureText ] = useState( type == "password" ? true : false);
  const [ passwordValue, setPasswordValue ] = useState("")
  const [ passwordStrength, setPasswordStrength ] = useState("")

  const handleFocus = () => {
    setFocused(true);
  };
  const handleBlur = () => {
    setFocused(false);
  };
  const handleView = () => {
    setView(prev => !prev)
    setSecureText(prev => !prev)
  }
  const handleInputChange = (text) => {
    if(type == "password") {
      handlePasswordChange(text)
    }
    onChange(text)
  }
  const handlePasswordChange = (text) => {
    setPasswordValue(text)
    if(text.length <= 6 && text.length !== 0) {
      setPasswordStrength("weak")
    } else if(text.length < 10 && text.length > 6) {
      setPasswordStrength("medium")
    } else if(text.length >= 10) {
      setPasswordStrength("strong")
    } else {
      setPasswordStrength("")
    }
  }


  return (
    <>
      <View style={styles.inputFieldContainer}>
      <TextInput
        style={styles.inputField(focused, type)}
        placeholder={placeholder}
        placeholderTextColor={COLORS.lightGrey}
        selectionColor={COLORS.primary}
        onFocus={handleFocus}
        onBlur={handleBlur}
        textContentType={type}
        secureTextEntry={secureText}
        onChangeText={(text) => handleInputChange(text)}
      />
        {secureTextEntry ? (
          <Pressable style={styles.viewTextButton} onPress={handleView}>
            <Ionicons
              name={view ? "eye" : "eye-off"}
              size={SIZES.large}
              color={COLORS.lightGrey}
            />
          </Pressable>
        ) : null}
      </View>
      {type === "password" && focused  ? <PasswordStrengthIndicator strength={passwordStrength} /> : null}
    </>
  );
};

export default TextInputField;
