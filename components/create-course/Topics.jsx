import {  Text, View, Pressable } from 'react-native'
import React from 'react'
import { FontAwesome6 } from '@expo/vector-icons';

import styles from '../../styles/screens/addCourse.style'
import { COLORS, SIZES } from '../../constants';

const Topics = ({ topic }) => {
  return (
    <View style={styles.topicContainer}>
      <Text style={styles.topicText}>{ topic.title.length > 30 ? topic.title.slice(0, 30) + "..." : topic.title}</Text>
    <Pressable style={styles.editTopicButton}>
    <FontAwesome6 name="edit" size={SIZES.regular} color={COLORS.light} />
    </Pressable>
    </View>
  )
}

export default Topics

