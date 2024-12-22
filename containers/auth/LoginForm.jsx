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
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import styles from "../../styles/auth/auth.style";
import { COLORS, SIZES } from "../../constants";
import { useRouter } from "expo-router";
import axios from "axios";


import { userActions } from "../../redux/slices/userSlice";
import { authActions } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const LoginForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });
  

  const loginUser = (user) => {
    dispatch(authActions.login());
    dispatch(userActions.login(user));
  };

  const handleSubmit = async () => {
    Object.keys(formValue).forEach((key) => {
      formValue[key] = formValue[key].trim();
    });
    setLoading(true);
    try {
      const res = await fetch("https://simesta-server.onrender.com/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      });
      setLoading(false);
      const apiRes = await res.json();
      console.log(apiRes)
      if (res.status == 303) {
        router.push(`auth/verify-email/${formValue.email}`);
        return
      }
      if (res.status == 200) {
        const user = apiRes.data;
        const accessToken = res.headers.map["authorization"].split(" ")[1];
        loginUser({
          id: user.id,
          name: user.name,
          accessToken,
        });
        router.push("/home");
      } else {
        Toast.show({
          type: "error",
          text1: "Unable to log in",
          text2: apiRes.message,
        });
      }
    } catch (error) {
      setLoading(false);
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
        selectionColor={COLORS.dark}
        secureTextEntry={false}
        onChange={(text) => setFormValue({ ...formValue, email: text })}
      />
      <TextInputField
        style={styles.inputField}
        placeholder="Enter your password"
        type="password"
        placeholderTextColor={COLORS.lightGrey}
        secureTextEntry={true}
        selectionColor={COLORS.dark}
        onChange={(text) => setFormValue({ ...formValue, password: text })}
      />
      <TouchableOpacity>
        <Text style={[styles.linkText, styles[theme].linkText]}>Forgot password?</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={[styles.loaderContainer, styles[theme].loaderContainer]}>
          <ActivityIndicator color={COLORS.primary} size={SIZES.medium} />
        </View>
      ) : (
        <Button onPress={handleSubmit} text="Sign In" type="form-action-btn" />
      )}
    </View>
  );
};

export default LoginForm;
