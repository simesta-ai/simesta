import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import RoundCheck from './RoundCheck'
import styles from '../../styles/screens/lectures.style'
import useTimeFormatter from '../../hooks/useTimeFormatter'

import { router } from 'expo-router'

const Lecture = ({ lecture }) => {

    const goToLecture = () => {
        router.navigate('/course/1/lectures/1')
    }
  return (
    <TouchableOpacity style={styles.lectureContainer} onPress={goToLecture}>
        <View style={styles.positionContainer}>
            <Text style={styles.positionText}>{lecture.position}</Text>
        </View>
      <View style={styles.lectureDetailsContainer}>
        <View style={styles.lectureNameContainer}>
            <Text style={styles.lectureName}>{lecture.name.length > 25 ? lecture.name.slice(0, 24) + "..." : lecture.name}</Text>
            { lecture.completed ? <RoundCheck completed={true} type="complete-check" /> : null }
        </View>
        <View style={styles.durationContainer}>
            <Text style={styles.durationText}>Duration: </Text>
        <Text style={styles.estimationTimeText}>{useTimeFormatter(lecture.estimatedCompletionTime)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Lecture

