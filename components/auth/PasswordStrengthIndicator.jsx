import { Text, View } from 'react-native'
import { useState } from 'react';


import styles from "../../styles/auth/auth.style";

const PasswordStrengthIndicator = ({ strength }) => {
    
  return (
    <View style={styles.indicatorContainer}>
        <Text style={styles.indicatorText}></Text>
        <View style={styles.indicatorWrapper}>
        <View style={[styles.indicator, styles.weak(strength)]} />
        <View style={[styles.indicator, styles.medium(strength)]} />
        <View style={[styles.indicator, styles.strong(strength)]} />
    </View>
    </View>
  )
}

export default PasswordStrengthIndicator

