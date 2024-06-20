import {
  Text,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";
import { useState } from "react";

import styles from "../../styles/auth/auth.style";
import { COLORS, SIZES } from "../../constants";
import { useRouter } from "expo-router";
import axios from "axios";
import client from "../../api/client";

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://192.168.180.93:3000/auth/login", {
        method: "POST", 
        headers: { "Content-Type": "application/json" }, 
        body: JSON.stringify(formValue), 
      });
      setLoading(false)
      const json = await res.json()
      if(res.status == 200) {
        await AsyncStorage.setItem("name", json.name)
        await AsyncStorage.setItem("id", json.id)
        router.push('/home')
      } else {
        Toast.show({
          type: 'error',
          text1: 'Unable to log in',
          text2: json.message
        });
      }
      

    } catch (error) {
      setLoading(false)
      console.error("Error during login:", error); // Handle network or other errors
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInputField
        style={styles.inputField}
        placeholder="Email address"
        type="emailAddress"
        placeholderTextColor={COLORS.lightGrey}
        selectionColor={COLORS.primary}
        secureTextEntry={false}
        onChange={(text) => setFormValue({ ...formValue, email: text })}
      />
      <TextInputField
        style={styles.inputField}
        placeholder="Enter your password"
        type="password"
        placeholderTextColor={COLORS.lightGrey}
        secureTextEntry={true}
        selectionColor={COLORS.primary}
        onChange={(text) => setFormValue({ ...formValue, password: text })}
      />
      <TouchableOpacity>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator color={COLORS.primary} size={SIZES.medium} />
        </View>
      ) : (
        <Button onPress={handleSubmit} text="Sign In" type="form-action-btn" />
      )}
    </View>
  );
};

export default LoginForm;
