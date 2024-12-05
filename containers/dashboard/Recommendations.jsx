import { Text, View, FlatList } from 'react-native'
import styles from "../../styles/containers/recommendedCourse.style"
import RecommendedCourseCard from '../../components/dashboard/RecommendedCourseCard'


const recommendedCourses = [
  {
    id: 1,
    title: "Introduction to Data Analysis",
    category: "Programming",
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    id: 2,
    title: "Physical Electronics",
    category: "Physics",
    duration: "6 weeks",
    level: "Beginner"
  },
  {
    id: 3,
    title: "Fluid Mechanics",
    category: "Physics",
    duration: "6 weeks",
    level: "Beginner"
  }
]
const Recommendations = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.greeting}>Courses you may like</Text>
      <FlatList
        data={recommendedCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecommendedCourseCard course={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: 20 }}
        scrollEnabled={true}
        horizontal
      />
    </View>
  )
}

export default Recommendations