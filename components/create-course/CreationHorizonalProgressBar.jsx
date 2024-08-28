import { Text, View } from 'react-native'
import React from 'react'

import styles from "../../styles/screens/addCourse.style"

const CreationHorizonalProgressBar = ({ value }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={styles.emptyBar}>
        <View style={styles.activeBar(value)} />
      </View>
    </View>
  )
}

export default CreationHorizonalProgressBar

