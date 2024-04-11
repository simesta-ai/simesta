
import React from 'react'
import { ScrollView, View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import styles from '../styles/screens/dashboard.style'

const DashboardScreen = () => {
  return (
    <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false} keyboardShouldPersistTaps="always">
            <View style={styles.container}>
                <Text>Dashboard</Text>
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default DashboardScreen
