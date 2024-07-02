import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import LoginForm from "../../containers/auth/LoginForm";
import SocialButton from "../../components/SocialButton";

import styles from "../../styles/auth/auth.style";

import { images, COLORS } from "../../constants";
import { Redirect, useRouter } from "expo-router";

const login = () => {
  const router = useRouter();
  const route = useRoute();

  const [hasName, setHasName] = useState(false);
  const user = useSelector(state => state.user)
  useEffect(() => {
    const checkForName = async () => {
      try {
        setHasName(!!user.name); 
      } catch (error) {
        console.error("Error retrieving name:", error);
      }
    };
    checkForName();
  }, []);

  return (
    <>
      {hasName ? (
        <Redirect href={"/home"} />
      ) : (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
          <ScrollView
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
          >
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
              <Text style={styles.taglineText}>
                Welcome back, continue learning!
              </Text>

              {/* Login Form */}
              <LoginForm />

              {/* Other Login Options */}
              <View style={styles.optionsContainer}>
                <View style={styles.lines} />
                <Text style={styles.optionText}>or sign in with</Text>
                <View style={styles.lines} />
              </View>

              <View style={styles.socialButtonsContainer}>
                <SocialButton authProvider={"google"} type="social-login-btn" />
              </View>

              <View style={styles.accountTextContainer}>
                <Text style={styles.accountText}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => router.push("auth/signup")}
                  style={styles.linkContainer}
                >
                  <Text style={styles.linkText}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
          <Toast />
        </SafeAreaView>
      )}
    </>
  );
};

export default login;
