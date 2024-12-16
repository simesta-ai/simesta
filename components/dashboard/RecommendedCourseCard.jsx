import {  Text, View, TouchableOpacity, Pressable } from 'react-native'
import React, { useContext} from 'react'
import { ThemeContext } from '../../context/ThemeContext';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import styles from '../../styles/containers/recommendedCourse.style'
import { SIZES, COLORS } from '../../constants';

const RecommendedCourseCard = ({ course }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Pressable style={[styles.container, styles[theme].container]}>
      <Text style={[styles.courseTitle, styles[theme].courseTitle]}>{course.title}</Text>
      <View style={styles.featuresContainer}>
            <View style={styles.feature}>
            <MaterialIcons name="access-time" size={SIZES.medium} color={COLORS.primary} />
            <Text style={[styles.featureText, styles[theme].featureText]}>{course.duration}</Text>
            </View>
            <View style={styles.feature}>
            <MaterialIcons name="category" size={SIZES.medium} color={COLORS.primary} />
            <Text style={[styles.featureText, styles[theme].featureText]}>{course.category}</Text>
            </View>
            <View style={styles.feature}>
            <MaterialCommunityIcons name="speedometer" size={SIZES.medium} color={COLORS.primary} />
            <Text style={[styles.featureText, styles[theme].featureText]}>{course.level}</Text>
            </View>
      </View>
    </Pressable>
  )
}

export default RecommendedCourseCard

