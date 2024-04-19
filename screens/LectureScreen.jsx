import {
    ScrollView,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    TouchableOpacity,
    Image,
    FlatList
  } from "react-native";
  
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useContext, useEffect, useState } from "react";
//   import { usePathname } from "expo-router";
//   import { TabBarContext } from "../context/TabBarContext";
  import CustomTabBar from "../components/CustomTabBar";
  import BackButtonContainer from '../containers/BackButtonContainer'
  import Button from "../components/Button";
  import RoundAccentButton from "../components/RoundAccentButton";
  import VideoScreen from "./VideoScreen";
  import { FontAwesome } from '@expo/vector-icons';
  import { FontAwesome6 } from '@expo/vector-icons';


import styles from '../styles/screens/lectures.style'
import { COLORS, SIZES } from '../constants';

import { courseDetails } from "../constants/courses";

const LectureScreen = () => {

    const lecture = courseDetails.topics[0].lectures[0]
    const [ showVideoLecture, setShowVideoLecture ] = useState(false)
    const [ completed, setCompleted ] = useState(false)

    const handleShowVideo = () => {
        setShowVideoLecture(prev => !prev)
    }
    const markAsComplete = () => {
        setCompleted(true)
    }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
      <View>
      <BackButtonContainer path="/course/1/lectures/info" />
        <Text style={styles.headerText}>{lecture.name.length > 30 ? lecture.name.slice(0, 29) + "..." : lecture.name}</Text>
      </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>

            <Text style={styles.lectureContentText}>{lecture.lectureText}</Text>
            { completed ? (
                <View style={styles.markedContainer}>
                    <FontAwesome6 name="check" size={SIZES.large} color={COLORS.progress} />
                    <Text style={styles.completedText}>Completed</Text>
                </View>
            ) : (
                <Button text={"Mark as completed"} type="course-cancel-btn" onPress={markAsComplete} />
            )}

            




            
        

          </View>
        </ScrollView>
        { showVideoLecture ? (
                <View style={styles.videoScreenContainer}>
                    <VideoScreen handleClose={handleShowVideo} />
                </View>
            ) : null}
        { !showVideoLecture ? (
            <View style={styles.hangingButton}>
            <RoundAccentButton
              icon={"video"}
              type="round-accent-btn-big"
              handlePress={handleShowVideo}
            />
        </View>
        ) : null}
        <CustomTabBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default LectureScreen

