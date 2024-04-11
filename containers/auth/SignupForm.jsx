import { Text, View, TouchableOpacity } from "react-native";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";
import { useState } from "react";

import styles from "../../styles/auth/auth.style";
import { COLORS } from "../../constants";
import { useRouter } from "expo-router";

const SignupForm = () => {

  const router = useRouter()

    const [formValue, setFormValue] = useState({
        fullname: "",
        email: "",
        password: "",
      });
    
      const handleSubmit = () => {
        console.log(formValue);
        router.push("/auth/verify-email")
      };

  return (
    <View style={styles.formContainer}>
      <TextInputField
        style={styles.inputField}
        placeholder="Fullname"
        placeholderTextColor={COLORS.lightGrey}
        selectionColor={COLORS.primary}
        secureTextEntry={false}
        onChange={(text) => setFormValue({ ...formValue, fullname: text })}
      />
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
        placeholder="Choose a password"
        type="password"
        placeholderTextColor={COLORS.lightGrey}
        secureTextEntry={true}
        selectionColor={COLORS.primary}
        onChange={(text) => setFormValue({ ...formValue, password: text })}
      />
      
      <TouchableOpacity>
        <Text style={styles.linkText}>Forgot password?</Text>
      </TouchableOpacity>
      <Button onPress={handleSubmit} text="Sign Up" type="form-action-btn" />
    </View>
  );
};

export default SignupForm;
