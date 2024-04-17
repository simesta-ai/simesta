import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  FlatList,
  TouchableOpacity
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from '../styles/screens/addCourse.style'
import { icons, COLORS, SIZES, courses } from "../constants";

const NewCourseScreen = () => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>
            <Text style={styles.greeting}>Add new course</Text>
            
          
          </View>
          </ScrollView> 
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default NewCourseScreen

