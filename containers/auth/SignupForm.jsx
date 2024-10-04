import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";
import { useState } from "react";
import Toast from "react-native-toast-message";
import styles from "../../styles/auth/auth.style";
import { COLORS, SIZES } from "../../constants";
import { useRouter } from "expo-router";

import { userActions } from "../../redux/slices/userSlice";
import { authActions } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const SignupForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const registerUser = (user) => {
    dispatch(authActions.signup());
    dispatch(userActions.register(user));
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://truelearn-production.up.railway.app/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      });
      setLoading(false);
      const userStr = await res.json();
      if (res.status == 201) {
        const user = userStr.data;
        const authTokenCookie = res.headers.get("set-cookie"); // Get the 'Auth-token' header
        const cookieParts = authTokenCookie.split(";");
        const authTokenPart = cookieParts.find((part) =>
          part.startsWith("Auth-token=")
        );
        const authToken = authTokenPart.split("=")[1];
        registerUser({
          id: user.id,
          name: user.name,
          accessToken: authToken,
        });
        router.push("/learning-method")
      } else {
        Toast.show({
          type: "error",
          text1: "Unable to sign up",
          text2: userStr.message,
        });
      }
      setFormValue({ ...formValue, name: "", email: "", password: "" });
    } catch (error) {
      setLoading(false);
      setFormValue({ ...formValue, name: "", email: "", password: "" });
      console.error("Error during registration:", error); // Handle network or other errors
    }
  };

  return (
    <View style={styles.formContainer}>
      <TextInputField
        style={styles.inputField}
        placeholder="Fullname"
        placeholderTextColor={COLORS.lightGrey}
        selectionColor={COLORS.dark}
        secureTextEntry={false}
        onChange={(text) => setFormValue({ ...formValue, name: text })}
      />
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
        placeholder="Choose a password"
        type="password"
        placeholderTextColor={COLORS.lightGrey}
        secureTextEntry={true}
        selectionColor={COLORS.dark}
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
        <Button onPress={handleSubmit} text="Sign Up" type="form-action-btn" />
      )}
    </View>
  );
};

export default SignupForm;
