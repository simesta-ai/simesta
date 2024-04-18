import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext, useEffect } from "react";
import { TabBarContext } from '../context/TabBarContext'

const QuizScreen = () => {
  const { display, setDisplay} = useContext(TabBarContext);

  useEffect(() => {
    setDisplay(true)
  
  }, [])
  return (
    <View>
      <Text>QuizScreen</Text>
    </View>
  )
}

export default QuizScreen

const styles = StyleSheet.create({})