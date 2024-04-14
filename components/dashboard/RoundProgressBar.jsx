import { Text, View } from 'react-native'
import { useState } from 'react'
import CircularProgress from 'react-native-circular-progress-indicator'


import { COLORS, SIZES } from '../../constants'


import styles from '../../styles/containers/courses.style'

const RoundProgressBar = ({ value }) => {
  return (
    <View style={styles.progressBarContainer}>
      <CircularProgress
        value={value}
        progressValueStyle={styles.progressValue}
        valueSuffix='%'
        valueSuffixStyle={styles.progressValue}
        radius={30}
        activeStrokeWidth={10}
        inactiveStrokeWidth={5}
        progressValueColor={COLORS.darkGrey}
        inActiveStrokeColor={COLORS.grey}
        // inActiveStrokeOpacity={1}
        activeStrokeColor={COLORS.progress}
      />
    </View>
  )
}

export default RoundProgressBar

