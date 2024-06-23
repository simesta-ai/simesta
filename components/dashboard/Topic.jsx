import {  Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import RoundCheck from './RoundCheck'
import styles from '../../styles/containers/courseOverview.style'
import { COLORS, SIZES } from '../../constants'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';

const Topic = ({ topic }) => {

    const topicTitle = topic.title.length > 30 ? topic.title.slice(0, 29) + "..." : topic.title

    const goToTopic =() => {
        router.navigate(`/course/topic/${topic.id}`)
    }

    if(!topic.completed && !topic.inProgress){
        return (
            <View style={styles.topicContainer(topic.completed, topic.inProgress)} onPress={goToTopic}>
                <Text style={styles.topicNameLocked}>{topicTitle}</Text>
                <MaterialIcons name="lock-outline" size={SIZES.large} color={COLORS.grey} />
            </View>
        )
    }
    if(!topic.completed && topic.inProgress){
        return (
            <TouchableOpacity style={styles.topicContainer(topic.completed, topic.inProgress)} onPress={goToTopic}>
                <Text style={styles.topicName}>{topicTitle}</Text>
                
            </TouchableOpacity>
        )
    }
  return (
    <TouchableOpacity style={styles.topicContainer(topic.completed, topic.inProgress)} onPress={goToTopic}>
      <Text style={styles.topicName}>{topicTitle}</Text>
      <RoundCheck completed={true} type="complete-check" />
    </TouchableOpacity>
  )
}

export default Topic

