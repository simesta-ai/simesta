import { Text, View, TouchableOpacity } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { OtpInput } from "react-native-otp-entry";
import Toast from "react-native-toast-message";
import { useRouter } from "expo-router";

import styles from "../../styles/auth/auth.style";
import { COLORS } from "../../constants";

import { useDispatch } from "react-redux";
import { userActions } from "../../redux/slices/userSlice";
import { authActions } from "../../redux/slices/authSlice";

const VerifyEmailForm = ({ email }) => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [ loadingResend, setLoadingResend ] = useState(false)

  const registerUser = (user) => {
    dispatch(authActions.signup());
    dispatch(userActions.register(user));
  };

  const resendOtp = async () => {
    setLoadingResend((prev) => !prev);
    try {
      const res = await fetch(
        `http://192.168.45.93:3000/api/auth/verify/email/${email}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }
      );
      const apiRes = await res.json();
      if (res.status !== 200) {
        Toast.show({
          type: "error",
          text1: "Unable to resend code",
          text2: apiRes.message,
        });
      } else {
        Toast.show({
          type: "success",
          text1: "Code resent successfully",
          text2: "Please check your email",
        });
      }
      setLoadingResend((prev) => !prev);
    } catch (error) {
      setLoadingResend((prev) => !prev);
      Toast.show({
        type: "error",
        text1: "Unable to resend code",
        text2: error.message,
      });
    }
  }

  const handleSubmit = async (otp) => {
    try {
      setLoading((prev) => !prev);
      const res = await fetch(
        "http://192.168.45.93:3000/api/auth/verify/otp",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email,
            otp,
          }),
        }
      );
      const apiRes = await res.json();
      if (res.status !== 200) {
        Toast.show({
          type: "error",
          text1: "Unable to verify code",
          text2: apiRes.message,
        });
      } else {
        const user = apiRes.data.user;
        console.log(user)
        const accessToken = res.headers.map["authorization"].split(" ")[1];
        registerUser({
          id: user.id,
          name: user.name,
          accessToken: accessToken,
        });
        router.push("/learning-method");
      }
      setLoading((prev) => !prev);
    } catch (error) {
      console.log(error);
      setLoading((prev) => !prev);
    }
  };

  return (
    <View>
      <OtpInput
        numberOfDigits={4}
        disabled={loading}
        focusColor={COLORS.primary}
        focusStickBlinkingDuration={500}
        onFilled={(text) => handleSubmit(text)}
        textInputProps={{
          accessibilityLabel: "One-Time Password",
        }}
        theme={{
          containerStyle: [styles.otpInput, styles[theme].otpInput],
          pinCodeContainerStyle: [styles.otpInputField, styles[theme].otpInputField],
          pinCodeTextStyle: [styles.pinCodeTextStyle, styles[theme].pinCodeTextStyle],
          focusStickStyle: styles.focusStick,
          focusedPinCodeContainerStyle: styles.otpInputHighlight,
        }}
      />
      <View style={styles.accountTextContainer}>
        <Text style={[styles.accountText, styles[theme].accountText]}>Didn't get a code? </Text>
        { !loadingResend ? <TouchableOpacity onPress={resendOtp} style={styles.linkContainer}>
          <Text style={[styles.linkText, styles[theme].linkText]}>Resend</Text>
        </TouchableOpacity> : <Text style={[styles.accountText, styles[theme].accountText]}>Resending...</Text>}
      </View>

      {/* <Button onPress={handleSubmit} text="Verify" type="form-action-btn"  /> */}
    </View>
  );
};

export default VerifyEmailForm;
