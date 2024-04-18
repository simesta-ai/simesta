import {  Text, View, Pressable } from 'react-native'
import React, { useState } from 'react'



import styles from '../styles/screens/mainCourse.style'
import { COLORS, SIZES } from '../constants'

const CourseTabButton = ({ name, activeTab, onHandleSearchType }) => {
  return (
    <Pressable style={styles.tabBtn(name, activeTab)} onPress={onHandleSearchType}>
      <Text style={styles.tabBtnText(name, activeTab)}>{name}</Text>
    </Pressable>
  )
}

export default CourseTabButton

