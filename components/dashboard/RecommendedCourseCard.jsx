import {  Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles/containers/recommendedCourse.style'
import { SIZES, COLORS } from '../../constants';

const RecommendedCourseCard = ({ course }) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.courseTitle}>{course.title}</Text>
      <Text style={styles.topicsCompleted}>Topic 1/8</Text>
      <View style={styles.featuresContainer}>
            <View style={styles.feature}>
            <MaterialIcons name="access-time" size={SIZES.medium} color={COLORS.primary} />
            <Text style={styles.featureText}>6 weeks</Text>
            </View>
            <View style={styles.feature}>
            <MaterialIcons name="category" size={SIZES.medium} color={COLORS.primary} />
            <Text style={styles.featureText}>{course.category}</Text>
            </View>
            <View style={styles.feature}>
            <MaterialCommunityIcons name="speedometer" size={SIZES.medium} color={COLORS.primary} />
            <Text style={styles.featureText}>Beginner</Text>
            </View>
      </View>
    </Pressable>
  )
}

export default RecommendedCourseCard

