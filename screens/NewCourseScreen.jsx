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
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import { router } from "expo-router";
import { TabBarContext } from '../context/TabBarContext'
import Button from "../components/Button";
import RoundAccentButton from "../components/RoundAccentButton";
import Topics from "../components/create-course/Topics";
import UploadedFile from "../components/create-course/UploadedFile"
import FileUploadBox from "../components/create-course/FileUploadBox";

import styles from '../styles/screens/addCourse.style'
import { icons, COLORS, SIZES } from "../constants";


import BackButtonContainer from "../containers/BackButtonContainer";
import { courseCreationActions } from "../redux/slices/courseCreationSlice";
import Toast from "react-native-toast-message";




const NewCourseScreen = () => {

  const { display, setDisplay} = useContext(TabBarContext);
  const courseCreationDetails = useSelector(state => state.courseCreationDetails);
  const dispatch = useDispatch();

  useEffect(() => {
    setDisplay(false)
  
  }, [])

  
  

  const handleAddTopic = () => {
    router.navigate('/create-course/add-topic')
  }
  const editTopic = () => {
    dispatch(courseCreationActions.setTopicEditIindex(1))
    router.navigate('/create-course/edit-topic')
  }
  const handleCreateCourse = () => {
    router.navigate('/create-course/progress')
  }
  const editTitle = () => {
    router.navigate('/new-course')
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
        <View style={styles.toastMessage}>
        <Toast />
        </View>
        
      <View>
      <BackButtonContainer path="/home" />
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
                 <Text style={styles.titleText}>{courseCreationDetails.title}</Text>
                 <RoundAccentButton type="round-accent-btn" icon="edit" handlePress={editTitle} />
              </View>
              </View>

              {/* Course Files section */}
              <View style={styles.fileUploadContainer}>
              <Text style={styles.label}>Add Files<Text style={styles.subText}> (optional)</Text></Text>
              {/* Uploaded files */}
              <View style={styles.uploadedFilesContainer}>
                {courseCreationDetails.files.map((file) => {
                  return <UploadedFile key={file.id} file={file} />
                })}
              </View>
              <FileUploadBox />
              </View>

              {/* Course Subtopics section */}

              <View style={styles.topicsWrapper}>
              <Text style={styles.label}>Topics<Text style={styles.subText}> (optional)</Text></Text>
            <View style={styles.topics}>
            {courseCreationDetails.topics.length > 0 ? courseCreationDetails.topics.map((topic) => (
                <Topics key={topic.id} topic={topic} />
              )) : <Text style={styles.defaultText}>No Topic added</Text>}
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

