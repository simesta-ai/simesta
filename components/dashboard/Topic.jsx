import {  Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'

import RoundCheck from './RoundCheck'
import styles from '../../styles/containers/courseOverview.style'
import { COLORS, SIZES, DARKMODECOLORS } from '../../constants'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import { ThemeContext } from '../../context/ThemeContext'
import { activeCourseActions } from '../../redux/slices/activeCourseSlice'

const Topic = ({ topic }) => {
    const activeCourseId = useSelector(state => state.course.id)
    const { theme } = useContext(ThemeContext)
    const dispatch = useDispatch()
    const topicTitle = topic.title.length > 30 ? topic.title.slice(0, 29) + "..." : topic.title

    const goToTopic =() => {
        dispatch(activeCourseActions.setActiveTopic(topic.id))
        router.navigate(`/course/${activeCourseId}/topic/${topic.id}`)
    }

    if(!topic.completed && !topic.inProgress){
        return (
            <View style={[styles.topicContainer(topic.completed, topic.inProgress),
                styles[theme].topicContainer(topic.completed, topic.inProgress)
            ]} onPress={goToTopic}>
                <Text style={[styles.topicNameLocked, styles[theme].topicNameLocked]}>{topicTitle}</Text>
                <MaterialIcons name="lock-outline" size={SIZES.large} color={
                    theme === 'light' ? COLORS.lightGray : DARKMODECOLORS.miniDarkGrey
                } />
            </View>
        )
    }
    if(!topic.completed && topic.inProgress){
        return (
            <TouchableOpacity style={[styles.topicContainer(topic.completed, topic.inProgress),
                styles[theme].topicContainer(topic.completed, topic.inProgress)
            ]} onPress={goToTopic}>
                <Text style={[styles.topicName, styles[theme].topicName]}>{topicTitle}</Text>
                
            </TouchableOpacity>
        )
    }
  return (
    <TouchableOpacity style={[styles.topicContainer(topic.completed, topic.inProgress),
        styles[theme].topicContainer(topic.completed, topic.inProgress)
    ]} onPress={goToTopic}>
      <Text style={[styles.topicName, styles[theme].topicName]}>{topicTitle}</Text>
      <RoundCheck completed={true} type="complete-check" />
    </TouchableOpacity>
  )
}

export default Topic

