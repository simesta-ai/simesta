import {  Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'

import CourseTabButton from './CourseTabButton'



import styles from '../styles/screens/mainCourse.style'
import { COLORS, SIZES } from '../constants'

const CourseTabs = ({ tabs, activeTab, setActiveTab}) => {

    
    
  return (
    <View style={styles.tabsWrapper}>

        {tabs.map((item) => (
            <CourseTabButton
            key={item}
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        ))}
    </View>
  )
}

export default CourseTabs