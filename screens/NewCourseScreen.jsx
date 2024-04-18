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
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { router } from "expo-router";
import { TabBarContext } from '../context/TabBarContext'
import Button from "../components/Button";
import RoundAccentButton from "../components/RoundAccentButton";
import Topics from "../components/create-course/Topics";

import styles from '../styles/screens/addCourse.style'
import { icons, COLORS, SIZES, courses } from "../constants";


import BackButtonContainer from "../containers/BackButtonContainer";


const topics = [
  {
    id: 1,
    title: "Introduction to Data Analytics",
  },
  {
    id: 2,
    title: "Data Analysis with Python",
    
  },
  {
    id: 3,
    title: "Data Analysis with R",
    
  },
  {
    id: 4,
    title: "Data Analysis with Excel",
  }
]


const NewCourseScreen = () => {

  const { display, setDisplay} = useContext(TabBarContext);

  useEffect(() => {
    setDisplay(false)
  
  }, [])

  const handleAddTopic = () => {
    router.navigate('/create-course/add-topic')
  }
  const handleCreateCourse = () => {
    router.navigate('/create-course/progress')
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <View>
      <BackButtonContainer />
        <Text style={styles.headerText}>Add new course</Text>
      </View>
      <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>
            
            <View style={styles.formContainer}>
              {/* Course Title section */}
              <View>
              <Text style={styles.label}>Course Title</Text>
              <View style={styles.titleContainer}>
                 <Text style={styles.titleText}>Data Analytics</Text>
                 <RoundAccentButton type="round-accent-btn" icon="edit" />
              </View>
              </View>

              {/* Course Subtopics section */}

              <View style={styles.topicsWrapper}>
              <Text style={styles.label}>Topics<Text style={styles.subText}> (optional)</Text></Text>
            <View style={styles.topics}>
            {topics.map((topic) => (
                <Topics key={topic.id} topic={topic} />
              ))}
            </View>
            <View style={styles.addTopicButton}>
              <View style={styles.line} />
              <Button text="Add new topic" type="neutral-btn" onPress={handleAddTopic} />
              <View style={styles.line} />
            </View>
              </View>
              
            </View>
            
          
          </View>
          </ScrollView> 
          <View style={styles.createCourseButton}>
          <Button text={'Create course'} type="create-course-btn" onPress={handleCreateCourse} />
          </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default NewCourseScreen

