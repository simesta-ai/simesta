import { Text, TouchableOpacity, Pressable } from 'react-native'
import styles from '../styles/components/button.style'
import { FontAwesome6 } from '@expo/vector-icons';

import { COLORS, SIZES } from '../constants'

const RoundAccentButton = ({ icon, type, handlePress }) => {
  return (
    <TouchableOpacity style={styles.container(type)} >
        <TouchableOpacity style={styles.roundAccentButton} onPress={handlePress}>
            {icon === "edit" ? <FontAwesome6 name="edit" size={SIZES.regular} color={COLORS.light} /> : <FontAwesome6 name={icon} size={SIZES.medium} color={COLORS.light} />}
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default RoundAccentButton
