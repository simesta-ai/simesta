import { StyleSheet, Text, View, TouchableOpacity, Image, Pressable } from 'react-native'
import RoundProgressBar from './dashboard/RoundProgressBar'
import HorizontalProgressBar from './dashboard/HorizontalProgressBar'


import styles from '../styles/containers/courses.style'

import { COLORS, SIZES } from '../constants'


const CourseCard = ({ position, course }) => {
  return (
    <Pressable style={styles.courseCardContainer(position)}>
      {/* {position === "dashboard" && <RoundProgressBar value={course.progress} />} */}
      <View style={styles.imageContainer}><Image style={styles.image} source={course.image} resizeMode='cover' /></View>
      {/* <Text style={styles.categoryText(course.color)}>{course.category.toUpperCase()}</Text> */}
      <Text style={styles.courseTitle}>{course.title.slice(0, 20)}</Text>
      <Text style={styles.topicsCompleted}>Topic 1/8</Text>
      <HorizontalProgressBar value={course.progress} />
      {/* {position === "course-page" && <HorizontalProgressBar value={course.progress} />} */}
    </Pressable>
  )
}

export default CourseCard

