import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Topic = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Topic

const styles = StyleSheet.create({})