import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState, useContext } from "react";
import { useSelector } from "react-redux";
import { ThemeContext } from "../../context/ThemeContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView } from "react-native-safe-area-context";
import Toast from "react-native-toast-message";
import LoginForm from "../../containers/auth/LoginForm";
import SocialButton from "../../components/SocialButton";

import styles from "../../styles/auth/auth.style";

import { images, COLORS, DARKMODECOLORS } from "../../constants";
import { Redirect, useRouter } from "expo-router";

const login = () => {
  const router = useRouter();
  const route = useRoute();
  const { theme, setTheme } = useContext(ThemeContext)
  const [hasName, setHasName] = useState(false);
  const user = useSelector(state => state.user);
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
        <Redirect href={"/auth/login"} />
      ) : (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme == "light" ? COLORS.light : DARKMODECOLORS.dark }}>
        <StatusBar
        barStyle={ theme == "light" ? "dark-content" : "light-content"}
        backgroundColor={theme == "light" ? COLORS.light : DARKMODECOLORS.dark}
      />
          <ScrollView
            keyboardShouldPersistTaps="always"
            showsVerticalScrollIndicator={false}
          >
            <View style={[styles.container, styles[theme].container]}>
              {/* Logo Image Container */}
              <View style={styles.logoContainer}>
                <Image
                  source={images.colouredLogo2D}
                  resizeMode="contain"
                  style={styles.logoImage}
                />
              </View>

              <Text style={[styles.headerText, styles[theme].headerText]}>Log In</Text>
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
                <Text style={[styles.accountText, styles[theme].accountText]}>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => router.push("auth/signup")}
                  style={styles.linkContainer}
                >
                  <Text style={[styles.linkText, styles[theme].linkText]}>Sign Up</Text>
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
