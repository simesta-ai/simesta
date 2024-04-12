import { Text, View } from 'react-native'
import React from 'react'
import MileStone from '../../components/dashboard/MileStone'

import styles from "../../styles/containers/milestones.style"

const MileStones = () => {

    const milestones = [
        {
            id: 1,
            title: "Start your first course",
            completed: true
        },
        {
            id: 2,
            title: "Complete your first lesson",
            completed: true
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
    </View>
  )
}

export default MileStones

