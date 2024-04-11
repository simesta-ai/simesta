import { Text, View, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from "react-native";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";
import { useState } from "react";

import styles from "../../styles/auth/auth.style";
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";

const LoginForm = () => {
  const router = useRouter()
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    console.log(formValue);
    router.push("/home")
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
      <Button onPress={handleSubmit} text="Sign In" type="form-action-btn" />
    </View>
  );
};

export default LoginForm;
