import {  Text, FlatList, View, Nest } from 'react-native'
import React from 'react'
import CourseCard from '../../components/CourseCard'
import { NestableScrollContainer, NestableDraggableFlatList } from 'react-native-draggable-flatlist'

import courseStyles from '../../styles/screens/courseScreen.style'

import { SIZES, courses } from '../../constants'

const CoursesScreenCourseContainer = () => {

    const allCourses = courses;
  return (
    <View>
        
      <FlatList
                data={allCourses}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <CourseCard position="course-page" course={item} />}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
                contentContainerStyle={courseStyles.listContainer}
                columnWrapperStyle={{ gap: 20,}}
      />
    </View>
  )
}

export default CoursesScreenCourseContainer

