import { Text, View, Pressable } from 'react-native'


import styles from "../styles/components/button.style"

const IconTextButton = ({ icon, text, type, handlePress }) => {
  return (
    <Pressable onPress={handlePress} style={styles.IconTextButtonContainer(type)}>
        {icon}
      <Text style={styles.IconTextButtonText(type)}>{text}</Text>
    </Pressable>
  )
}

export default IconTextButton

