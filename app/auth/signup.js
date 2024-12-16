import { Text, ScrollView, View, Image, TouchableOpacity, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import SignupForm from "../../containers/auth/SignupForm";
import SocialButton from "../../components/SocialButton";
import Toast from "react-native-toast-message";
import styles from "../../styles/auth/auth.style";

import { images, COLORS, DARKMODECOLORS } from "../../constants";
import { useRouter } from "expo-router";

const signup = () => {

  const router  = useRouter()
  const { theme } = useContext(ThemeContext)
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme == "light" ? COLORS.light : DARKMODECOLORS.dark }}>
      <StatusBar
        barStyle={ theme == "light" ? "dark-content" : "light-content"}
        backgroundColor={theme == "light" ? COLORS.light : DARKMODECOLORS.dark}
      />
      <ScrollView keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}>

      <View style={styles.container}>
             {/* Logo Image Container */}
        <View style={styles.logoContainer}>
          <Image
            source={images.colouredLogo2D}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <Text style={[styles.headerText, styles[theme].headerText]}>Create Account</Text>
        <Text style={styles.taglineText}>Take your course study to the next level!</Text>

        {/* Signup Form */}
        <SignupForm />

        {/* Other Login Options */}
        <View style={styles.optionsContainer}>
          <View style={styles.lines} />
          <Text style={styles.optionText}>or sign up with</Text>
          <View style={styles.lines} />
        </View>

        <View style={styles.socialButtonsContainer}>
          <SocialButton authProvider={"google"} type="social-login-btn" />
        </View>

        <View style={styles.accountTextContainer}>
          <Text style={[styles.accountText, styles[theme].accountText]}>Already have an account?{" "}</Text>
          <TouchableOpacity
            onPress={() => router.push("auth/login")}
            style={styles.linkContainer}
          >
            <Text style={[styles.linkText, styles[theme].linkText]}>Sign In</Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default signup;
