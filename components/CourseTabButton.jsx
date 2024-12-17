import {  Text, View, Pressable } from 'react-native'
import React, { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'


import styles from '../styles/screens/mainCourse.style'
import { COLORS, SIZES } from '../constants'

const CourseTabButton = ({ name, activeTab, onHandleSearchType }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <Pressable style={[styles.tabBtn(name, activeTab), styles[theme].tabBtn(name, activeTab)]} onPress={onHandleSearchType}>
      <Text style={[styles.tabBtnText(name, activeTab), styles[theme].tabBtnText(name, activeTab)]}>{name}</Text>
    </Pressable>
  )
}

export default CourseTabButton

