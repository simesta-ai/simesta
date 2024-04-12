import {  Text, View, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';

import { COLORS, SIZES} from '../../constants'
import styles from '../../styles/containers/milestones.style'

const RoundCheck = ({ completed }) => {
  return (
    <View style={styles.checkContainer(completed)}>
      { completed ? <MaterialIcons name="check" size={SIZES.small} color={COLORS.light} /> : null }
    </View>
  )
}

export default RoundCheck

