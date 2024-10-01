import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import RoundCheck from './RoundCheck'
import styles from '../../styles/screens/lectures.style'
import useTimeFormatter from '../../hooks/useTimeFormatter'
import { useDispatch, useSelector } from 'react-redux'
import { activeCourseActions } from '../../redux/slices/activeCourseSlice'

import { router } from 'expo-router'

const Lecture = ({ lecture }) => {
    const activeCourseId = useSelector(state => state.course.activeCourseId)
    const activeTopicId = useSelector(state => state.course.activeTopicId)
    const dispatch = useDispatch()
    const goToLecture = () => {
      dispatch(activeCourseActions.setActiveLecture(lecture.id))
      dispatch(activeCourseActions.setActiveLectureTitle(lecture.title))
        router.navigate(`course/${activeCourseId}/topic/${activeTopicId}/lectures/${lecture.id}`)
    }
  return (
    <TouchableOpacity style={styles.lectureContainer} onPress={goToLecture}>
        <View style={styles.positionContainer}>
            <Text style={styles.positionText}>{lecture.position}</Text>
        </View>
      <View style={styles.lectureDetailsContainer}>
        <View style={styles.lectureNameContainer}>
            <Text style={styles.lectureName}>{lecture.title.length > 25 ? lecture.title.slice(0, 24) + "..." : lecture.title}</Text>
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

