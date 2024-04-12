import { Text, View } from 'react-native'
import React from 'react'
import RoundCheck from './RoundCheck'

import { COLORS, SIZES} from '../../constants'
import styles from '../../styles/containers/milestones.style'

const MileStone = ({ milestone }) => {
  return (
    <View style={styles.milestoneContainer}>
      <RoundCheck completed={milestone.completed} />
    <Text style={styles.milestoneText}>{milestone.title}</Text>
    </View>
  )
}

export default MileStone

