import {  Text, View, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import { COLORS, SIZES} from '../../constants'
import styles from '../../styles/containers/milestones.style'

const RoundCheck = ({ completed }) => {
  return (
    <View style={styles.checkContainer(completed)}>
      { completed ? <FontAwesome5 name="check" size={SIZES.xSmall} color={COLORS.primary} /> : null }
    </View>
  )
}

export default RoundCheck

