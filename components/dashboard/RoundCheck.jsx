import {  Text, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

import { COLORS, SIZES} from '../../constants'
import styles from '../../styles/containers/milestones.style'

const RoundCheck = ({ completed, type }) => {
  const {theme} = useContext(ThemeContext)
  return (
    <View style={styles.checkContainer(completed, type, theme)}>
      { completed ? <FontAwesome5 name="check" size={SIZES.xSmall} color={ type === "dashboard-check" ? (
        theme === "light" ? COLORS.light : COLORS.white
      ) : COLORS.light} /> : null }
    </View>
  )
}

export default RoundCheck

