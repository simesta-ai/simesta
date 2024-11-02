import { Text, ScrollView, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import Toast from "react-native-toast-message";
import VerifyEmailForm from "../../../../containers/auth/VerifyEmailForm";

import styles from "../../../../styles/auth/auth.style";

import { images, COLORS } from "../../../../constants";
// import { useRouter } from "expo-router";

const VerifyEmail = () => {
    const params = useLocalSearchParams();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <ScrollView  showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
             {/* Logo Image Container */}
        <View style={styles.logoContainer}>
          <Image
            source={images.colouredLogo2D}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <Text style={styles.headerText}>Verify Code</Text>
        <Text style={styles.taglineText}>Please enter the code we just sent to your email at: <Text style={styles.accentText}>{params.email}</Text></Text>

        {/* Verify email Form */}
        <VerifyEmailForm email={params.email} />
        
        </View>
      </ScrollView>
      <Toast />
    </SafeAreaView>
  )
}

export default VerifyEmail
