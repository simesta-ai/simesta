import { Text, View, TouchableOpacity } from 'react-native'


import styles from '../styles/components/button.style'

const Button = ({ text, type, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container(type)}>
        <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
