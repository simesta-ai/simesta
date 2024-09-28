import { Text, TouchableOpacity, Pressable } from 'react-native'
import styles from '../styles/components/button.style'
import { FontAwesome6 } from '@expo/vector-icons';

import { COLORS, SIZES } from '../constants'

const RoundAccentButton = ({ icon, type, handlePress }) => {
  return (
    <Pressable style={styles.container(type)} >
        <Pressable style={styles.roundAccentButton} onPress={handlePress}>
            {icon}
        </Pressable>
    </Pressable>
  )
}

export default RoundAccentButton
