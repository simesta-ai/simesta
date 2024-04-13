import { Text, View } from 'react-native'
import { useState } from 'react'


import styles from '../../styles/containers/courses.style'

const RoundProgressBar = ({ value }) => {
  return (
    <View style={styles.progressBarContainer}>
      <View style={styles.progressIndicatorBar}>
      <Text style={styles.progressValue}>{value + "%"}</Text>
      </View>
    </View>
  )
}

export default RoundProgressBar

