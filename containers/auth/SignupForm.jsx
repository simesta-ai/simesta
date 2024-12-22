import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";
import { useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Toast from "react-native-toast-message";
import styles from "../../styles/auth/auth.style";
import { COLORS, SIZES } from "../../constants";
import { useRouter } from "expo-router";

const SignupForm = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(false);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    Object.keys(formValue).forEach((key) => {
      formValue[key] = formValue[key].trim();
    });
    setLoading(true);
    try {
      const res = await fetch("https://simesta-server.onrender.com/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValue),
      });
      setLoading(false);
      const apiJSON = await res.json();
      if (res.status == 303) {
        router.push(`auth/verify-email/${formValue.email}`);
      } else {
        Toast.show({
          type: "error",
          text1: apiJSON.message,
        });
      }
      // setFormValue({ ...formValue, name: "", email: "", password: "" });
    } catch (error) {
      setLoading(false);
      // setFormValue({ ...formValue, name: "", email: "", password: "" });
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
        <Text style={[styles.linkText, styles[theme].linkText]}>Forgot password?</Text>
      </TouchableOpacity>
      {loading ? (
        <View style={[styles.loaderContainer, styles[theme].loaderContainer]}>
          <ActivityIndicator color={COLORS.primary} size={SIZES.medium} />
        </View>
      ) : (
        <Button onPress={handleSubmit} text="Sign Up" type="form-action-btn" />
      )}
    </View>
  );
};

export default SignupForm;
