import { Text, ScrollView, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import VerifyEmailForm from "../../containers/auth/VerifyEmailForm";


import styles from "../../styles/auth/auth.style";

import { images, COLORS } from "../../constants";
// import { useRouter } from "expo-router";

const VerifyEmail = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <ScrollView  showsVerticalScrollIndicator={false}>

        <View style={styles.container}>
             {/* Logo Image Container */}
        <View style={styles.logoContainer}>
          <Image
            source={images.colouredLogo}
            resizeMode="contain"
            style={styles.logoImage}
          />
        </View>

        <Text style={styles.headerText}>Verify Code</Text>
        <Text style={styles.taglineText}>Please enter the code we just sent to your email at: <Text style={styles.accentText}>example@email.com</Text></Text>

        {/* Verify email Form */}
        <VerifyEmailForm />
        
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default VerifyEmail
