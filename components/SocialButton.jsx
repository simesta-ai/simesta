import { Text, TouchableOpacity } from 'react-native'
import styles from '../styles/components/button.style'
import CustomIcon from './CustomIcon'

import { COLORS, SIZES } from '../constants'

const SocialButton = ({ authProvider, type }) => {
  return (
    <TouchableOpacity style={styles.container(type)}>
        <TouchableOpacity style={styles.socialButton}>
            <CustomIcon name={authProvider} color={COLORS.dark} size={SIZES.medium}  />
        </TouchableOpacity>
    </TouchableOpacity>
  )
}

export default SocialButton
