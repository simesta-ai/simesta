import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import RoundProgressBar from './dashboard/RoundProgressBar'
import HorizontalProgressBar from './dashboard/HorizontalProgressBar'


import styles from '../styles/containers/courses.style'

import { COLORS, SIZES } from '../constants'


const CourseCard = ({ position, course }) => {
  return (
    <TouchableOpacity style={styles.courseCardContainer(position)}>
      {position === "dashboard" && <RoundProgressBar value={course.progress} />}
      <View style={styles.imageContainer}><Image style={styles.image} source={course.image} resizeMode='cover' /></View>
      <Text style={styles.categoryText(course.color)}>{course.category.toUpperCase()}</Text>
      <Text style={styles.courseTitle}>{course.title.slice(0, 20)}</Text>
      {position === "course-page" && <HorizontalProgressBar value={course.progress} />}
    </TouchableOpacity>
  )
}

export default CourseCard

