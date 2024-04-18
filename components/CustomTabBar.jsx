import {  Text, View, Pressable } from 'react-native'
import React from 'react'
import TabBarIcons from './TabBarIcons'
import AddCourseButton from './AddCourseButton'
import { router } from 'expo-router'

import styles from '../styles/components/bottomTab.style'

import { COLORS, SIZES } from '../constants'

const CustomTabBar = () => {

    const goToHome = () => {
        router.navigate('/home')
    }
    const goToCourses = () => {
        router.navigate('/courses')
    }
    const goToAddCourse = () => {
        router.navigate('/new-course')
    }
    const goToTest = () => {
        router.navigate('/take-test')
    }
    const goToProfile = () => {
        router.navigate('/profile')
    }
  return (
    <View style={styles.custom.container}>
      <Pressable onPress={goToHome}>
      <TabBarIcons
              tag="Home"
              name="home"
              size={SIZES.large}
              color={COLORS.lightGrey}
            />
      </Pressable>
      <Pressable onPress={goToCourses}>
      <TabBarIcons
              tag="Courses"
              name="courses"
              size={SIZES.large}
              color={COLORS.lightGrey}
            />
      </Pressable>
      <Pressable onPress={goToAddCourse}>
      <AddCourseButton />
      </Pressable>
      <Pressable onPress={goToTest}>
      <TabBarIcons
              tag="Test"
              name="puzzle"
              size={SIZES.large}
              color={COLORS.lightGrey}
            />
      </Pressable>
      <Pressable onPress={goToProfile}>
      <TabBarIcons
              tag="Profile"
              name="profile"
              size={SIZES.large}
              color={COLORS.lightGrey}
            />
      </Pressable>
    </View>
  )
}

export default CustomTabBar

