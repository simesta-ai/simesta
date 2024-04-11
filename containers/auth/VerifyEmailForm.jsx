import { Text, View, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import OTPInputView from '@twotalltotems/react-native-otp-input'
import Button from '../../components/Button';
import { useRouter } from 'expo-router';

import styles from "../../styles/auth/auth.style";


const VerifyEmailForm = () => {

    const router = useRouter()


    const handleSubmit = (otp) => {
        console.log(otp)
        router.push("/home")
    }

    
  return (
    <View>
        <OTPInputView
            pinCount={4}
            autoFocusOnLoad
            style={styles.otpInput}
            codeInputFieldStyle={styles.otpInputField}
            codeInputHighlightStyle={styles.otpInputHighlight}
            onCodeFilled={(code) => handleSubmit(code)}
        />
        <View style={styles.accountTextContainer}>
  <Text style={styles.accountText}>Didn't get a code?{" "}</Text>
  <TouchableOpacity
    onPress={() => router.push("auth/signup")}
    style={styles.linkContainer}
  >
    <Text style={styles.linkText}>Resend</Text>
  </TouchableOpacity>
</View>

{/* <Button onPress={handleSubmit} text="Verify" type="form-action-btn"  /> */}


    </View>
  )
}

export default VerifyEmailForm
