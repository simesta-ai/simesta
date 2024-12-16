import { Text, View } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
import RoundCheck from './RoundCheck'

import { COLORS, SIZES} from '../../constants'
import styles from '../../styles/containers/milestones.style'

const MileStone = ({ milestone }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <View style={styles.milestoneContainer}>
      <RoundCheck completed={milestone.completed} type="dashboard-check" />
    <Text style={styles.milestoneText(milestone.completed, theme)}>{milestone.title}</Text>
    </View>
  )
}

export default MileStone

