import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import RoundProgressBar from './dashboard/RoundProgressBar'


import styles from '../styles/containers/courses.style'

import { COLORS, SIZES } from '../constants'


const CourseCard = ({ position, course }) => {
  return (
    <TouchableOpacity style={styles.courseCardContainer(position)}>
      {position === "dashboard" && <RoundProgressBar value={course.progress} />}
      <View style={styles.imageContainer}><Image style={styles.image} source={course.image} resizeMode='contain' /></View>
      <Text style={styles.categoryText(course.color)}>{course.category.toUpperCase()}</Text>
      <Text style={styles.courseTitle}>{course.title}</Text>
    </TouchableOpacity>
  )
}

export default CourseCard

