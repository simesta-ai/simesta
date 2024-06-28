import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";
import { useState } from "react";
import Toast from "react-native-toast-message";
import styles from "../../styles/auth/auth.style";
import { COLORS, SIZES } from "../../constants";
import { useRouter } from "expo-router";



const SignupForm = () => {

    const router = useRouter()
    const [loading, setLoading] = useState(false);
    const [formValue, setFormValue] = useState({
        name: "",
        email: "",
        password: "",
      });
    
      const handleSubmit = async () => {
        setLoading(true);
        try {
          const res = await fetch("http://192.168.130.93:3000/auth/signup", {
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
              text1: 'Unable to sign up',
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
        placeholder="Fullname"
        placeholderTextColor={COLORS.lightGrey}
        selectionColor={COLORS.primary}
        secureTextEntry={false}
        onChange={(text) => setFormValue({ ...formValue, name: text })}
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
