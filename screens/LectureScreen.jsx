import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
//   import { usePathname } from "expo-router";
//   import { TabBarContext } from "../context/TabBarContext";
import CustomTabBar from "../components/CustomTabBar";
import BackButtonContainer from "../containers/BackButtonContainer";
import Button from "../components/Button";
import RoundAccentButton from "../components/RoundAccentButton";
import VideoScreen from "./VideoScreen";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import styles from "../styles/screens/lectures.style";
import { COLORS, SIZES } from "../constants";


import { activeCourseActions } from "../redux/slices/activeCourseSlice";

const LectureScreen = ({ courseId, topicId, lectureId }) => {
  const dispatch = useDispatch()
  const [lecture, setLecture] = useState({
    lectureText: "",
    videos: [""],
  });
  const [showVideoLecture, setShowVideoLecture] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleShowVideo = () => {
    setShowVideoLecture((prev) => !prev);
  };
  const markAsComplete = () => {
    setCompleted(true);
  };

  const getLecture = async () => {
    const res = await fetch(`http://192.168.90.93:3000/course/topic/lecture/${lectureId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data.videos)
    if (res.status == 200) {
      setLecture({
        ...lecture,
        lectureText: data.lectureText,
        videos: data.videos,
      });
      dispatch(activeCourseActions.setActiveLectureContent(lecture))
    }
  };

  useEffect(() => {
    getLecture()
    
  }, []);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
        {/* <View>
          <BackButtonContainer path={`course/${courseId}/topic/${topicId}`} />
          <Text style={styles.headerText}> Hi
            {lecture.name.length > 30
              ? lecture.name.slice(0, 29) + "..."
              : lecture.name}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>
            <Text style={styles.lectureContentText}>{lecture.lectureText}</Text>
            {completed ? (
              <View style={styles.markedContainer}>
                <FontAwesome6
                  name="check"
                  size={SIZES.large}
                  color={COLORS.progress}
                />
                <Text style={styles.completedText}>Completed</Text>
              </View>
            ) : (
              <Button
                text={"Mark as completed"}
                type="course-cancel-btn"
                onPress={markAsComplete}
              />
            )}
          </View>
        </ScrollView>
        {showVideoLecture ? (
          <View style={styles.videoScreenContainer}>
            <Pressable style={styles.closeButton} onPress={handleShowVideo}>
              <MaterialCommunityIcons
                name="close"
                size={SIZES.xLarge}
                color={COLORS.light}
              />
            </Pressable>
            <VideoScreen
              handleClose={handleShowVideo}
              videoLink={lecture.videos[0]}
            />
          </View>
        ) : null}
        {!showVideoLecture ? (
          <View style={styles.hangingButton}>
            <RoundAccentButton
              icon={"video"}
              type="round-accent-btn-big"
              handlePress={handleShowVideo}
            />
          </View>
        ) : null} */}
        <Text>Hi</Text>
        <CustomTabBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default LectureScreen;
