import { Text, ScrollView, View, Image, StatusBar } from "react-native";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/ThemeContext";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";
import VerifyEmailForm from "../../../../containers/auth/VerifyEmailForm";

import styles from "../../../../styles/auth/auth.style";

import { images, COLORS, DARKMODECOLORS } from "../../../../constants";
// import { useRouter } from "expo-router";

const VerifyEmail = () => {
  // const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const params = useLocalSearchParams();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme == "light" ? COLORS.light : DARKMODECOLORS.dark,
      }}
    >
      <StatusBar
        barStyle={theme == "light" ? "dark-content" : "light-content"}
        backgroundColor={theme == "light" ? COLORS.light : DARKMODECOLORS.dark}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          {/* Logo Image Container */}
          <View style={styles.logoContainer}>
            <Image
              source={images.colouredLogo2D}
              resizeMode="contain"
              style={styles.logoImage}
            />
          </View>

          <Text style={[styles.headerText, styles[theme].headerText]}>Verify Code</Text>
          <Text style={styles.taglineText}>
            Please enter the code we just sent to your email at:{" "}
            <Text style={styles.accentText}>{params.email}</Text>
          </Text>

          {/* Verify email Form */}
          <VerifyEmailForm email={params.email} />
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  );
};

export default VerifyEmail;
