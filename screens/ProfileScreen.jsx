import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useContext, useEffect } from "react";
import { TabBarContext } from '../context/TabBarContext'

const ProfileScreen = () => {

  const { display, setDisplay} = useContext(TabBarContext);

  useEffect(() => {
    setDisplay(true)
  
  }, [])
  return (
    <View>
      <Text>ProfileScreen</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})