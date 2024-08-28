import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SignupForm from "../../containers/auth/SignupForm";
import SocialButton from "../../components/SocialButton";
import Toast from "react-native-toast-message";
import styles from "../../styles/auth/auth.style";

import { images, COLORS } from "../../constants";
import { useRouter } from "expo-router";

const signup = () => {

  const router  = useRouter()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
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

        <Text style={styles.headerText}>Create Account</Text>
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
          <SocialButton authProvider={"apple"} type="social-login-btn" />
          <SocialButton authProvider={"google"} type="social-login-btn" />
          <SocialButton authProvider={"facebook"} type="social-login-btn" />
        </View>

        <View style={styles.accountTextContainer}>
          <Text style={styles.accountText}>Already have an account?{" "}</Text>
          <TouchableOpacity
            onPress={() => router.push("auth/login")}
            style={styles.linkContainer}
          >
            <Text style={styles.linkText}>Sign In</Text>
          </TouchableOpacity>
        </View>
        </View>
        
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default signup;
