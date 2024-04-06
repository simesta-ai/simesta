import { StyleSheet, Text, View } from 'react-native'
import { Redirect } from 'expo-router'
import React from 'react'

const Dashboard = () => {

    const user = {
        id: 1,
        name: "John Doe",
        email: "",
        loggedIn: false
        }
    
    
    if(!user.loggedIn) {
    return <Redirect href={'/auth/login'} />
    }

  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})