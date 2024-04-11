import { Text, View, TouchableOpacity, Pressable } from 'react-native'


import styles from '../styles/components/button.style'

const Button = ({ text, type, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.container(type)}>
        <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  )
}

export default Button
