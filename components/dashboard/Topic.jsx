import {  Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

import RoundCheck from './RoundCheck'
import styles from '../../styles/containers/courseOverview.style'
import { COLORS, SIZES } from '../../constants'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons';

const Topic = ({ topic }) => {

    const goToTopic =() => {
        router.navigate('/course/1/lectures/info')
    }

    if(!topic.completed && !topic.inProgress){
        return (
            <View style={styles.topicContainer} onPress={goToTopic}>
                <Text style={styles.topicNameLocked}>{topic.name}</Text>
                <MaterialIcons name="lock-outline" size={SIZES.large} color={COLORS.grey} />
            </View>
        )
    }
    if(!topic.completed && topic.inProgress){
        return (
            <TouchableOpacity style={styles.topicContainer} onPress={goToTopic}>
                <Text style={styles.topicName}>{topic.name}</Text>
                
            </TouchableOpacity>
        )
    }
  return (
    <TouchableOpacity style={styles.topicContainer} onPress={goToTopic}>
      <Text style={styles.topicName}>{topic.name}</Text>
      <RoundCheck completed={true} type="complete-check" />
    </TouchableOpacity>
  )
}

export default Topic

