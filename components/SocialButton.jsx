import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles/components/button.style'
import CustomIcon from './CustomIcon'
import * as Linking from "expo-linking"
import * as WebBrowser from 'expo-web-browser'

import { COLORS, SIZES } from '../constants'
import axios from 'axios'
import { router } from 'expo-router'

const SocialButton = ({ authProvider, type}) => {

  const authWithGoogle = async () => {
    router.push("/learning-method")
    // let result = await WebBrowser.openAuthSessionAsync('http://192.168.1.177:3000/auth/google');
    // const res = await fetch("http://192.168.1.177:3000/auth/google");
    // const json = await res.json()
    // console.log(json)
  }
  return (
    <TouchableOpacity style={styles.container(type)} >
        <TouchableOpacity style={styles.socialButton} onPress={authWithGoogle}>
            <CustomIcon name={authProvider} color={COLORS.dark} size={SIZES.medium}  />
            <Text style={styles.socialBtnText}>Continue with Google</Text>
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default SocialButton
