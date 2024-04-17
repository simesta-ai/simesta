import { Text, View } from 'react-native'
import React from 'react'

import courseStyles from '../../styles/screens/courseScreen.style'

const HorizontalProgressBar = ({ value }) => {
  return (
    <View style={courseStyles.barContainer}>
      <View style={courseStyles.emptyBar}>
        <View style={courseStyles.activeBar(value)} />
      </View>
        <Text style={courseStyles.progressText}>{value}%</Text>
    </View>
  )
}

export default HorizontalProgressBar

