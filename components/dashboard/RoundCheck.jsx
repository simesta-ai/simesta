import {  Text, View, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import { COLORS, SIZES} from '../../constants'
import styles from '../../styles/containers/milestones.style'

const RoundCheck = ({ completed, type }) => {
  return (
    <View style={styles.checkContainer(completed, type)}>
      { completed ? <FontAwesome5 name="check" size={SIZES.xSmall} color={ type === "dashboard-check" ? COLORS.primary : COLORS.light} /> : null }
    </View>
  )
}

export default RoundCheck

