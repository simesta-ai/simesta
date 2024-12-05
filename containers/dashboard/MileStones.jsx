import { Text, View } from 'react-native'
import React from 'react'
import MileStone from '../../components/dashboard/MileStone'
import Streaks from '../../components/dashboard/Streaks'

import styles from "../../styles/containers/milestones.style"

const MileStones = () => {

  const milestones = [
    {
      id: 1,
      title: "Start your first course",
      completed: false
    },
    {
      id: 2,
      title: "Complete your first lesson",
      completed: false
    },
    {
      id: 3,
      title: "Take your first quiz",
      completed: false
    }
  ]
  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>Start your learning journey!</Text>
      {milestones.map((milestone, index) => (
        <MileStone key={milestone.id} milestone={milestone} />
      ))}
      <Streaks streak={0} />
    </View>
  )
}

export default MileStones

