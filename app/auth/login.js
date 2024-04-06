import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LoginForm from "../../containers/auth/LoginForm";
import SocialButton from "../../components/SocialButton";

import styles from "../../styles/auth/auth.style";

import { images, COLORS } from "../../constants";
import { useRouter } from "expo-router";

const login = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
             {/* Logo Image Container */}
        <View style={styles.logoContainer}>
          <Image
            source={images.colouredLogo}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <Text style={styles.headerText}>Log In</Text>
        <Text style={styles.taglineText}>Welcome back, continue learning!</Text>

        {/* Login Form */}
        <LoginForm />

        {/* Other Login Options */}
        <View style={styles.optionsContainer}>
          <View style={styles.lines} />
          <Text style={styles.optionText}>or sign in with</Text>
          <View style={styles.lines} />
        </View>

        <View style={styles.socialButtonsContainer}>
          <SocialButton authProvider={"apple"} type="social-login-btn" />
          <SocialButton authProvider={"google"} type="social-login-btn" />
          <SocialButton authProvider={"facebook"} type="social-login-btn" />
        </View>

        <View style={styles.accountTextContainer}>
          <Text style={styles.accountText}>Don't have an account?{" "}</Text>
          <TouchableOpacity
            onPress={() => router.push("auth/signup")}
            style={styles.linkContainer}
          >
            <Text style={styles.linkText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default login;
