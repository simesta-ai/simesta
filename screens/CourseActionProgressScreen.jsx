import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useRef, useState } from "react";
import CircularProgress from "react-native-circular-progress-indicator";
import Button from "../components/Button";
import { TabBarContext } from "../context/TabBarContext";
import CreationHorizonalProgressBar from "../components/create-course/CreationHorizonalProgressBar";
import LottieView from "lottie-react-native";

import styles from "../styles/screens/courseActionProgress.style";
import { icons, COLORS, SIZES } from "../constants";
import { router, Link } from "expo-router";

const CourseActionProgressScreen = () => {
  const { display, setDisplay } = useContext(TabBarContext);
  const [speed, setSpeed] = useState(1);
  const [creatingCourse, setCreatingCourse] = useState(true);
  const [progress, setProgress] = useState(0);

  let value = 0;
  const error = false;
  const animationRef = useRef(null);

  useEffect(() => {
    if (progress < 100) {
      const progressValue = setInterval(() => {
        if (progress <= 100) {
          setProgress((prev) => prev + 1);
        } else {
          setProgress(100);
          clearInterval(progressValue);
        }
      }, 200);
    }
  }, []);

  // useEffect(() => {

  //   if(progress == 100) {
  //       setSpeed(1)
  //       animationRef.current?.play();
  //       setTimeout(() => {
  //           setSpeed(0)
  //       }, 1700)
  //   } else {
  // const progressValue = setInterval(() => {
  //   if(progress <= 100){
  //     setProgress(prev => prev + 1)
  //   } else {
  //     setProgress(100)
  //     clearInterval(progressValue)
  //   }
  // }, 200);
  //   }
  // }, [progress]);

  const goToCourse = () => {
    router.navigate("/course/1");
  };
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
            <View style={styles.progressContainer}>
              {!creatingCourse ? (
                <LottieView
                  autoPlay
                  ref={animationRef}
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: COLORS.light,
                  }}
                  // Find more Lottie files at https://lottiefiles.com/featured
                  source={require("../lottie/completion_icon.json")}
                  speed={speed}
                />
              ) : (
                <LottieView
                  autoPlay
                  style={{
                    width: 400,
                    height: 400,
                    backgroundColor: COLORS.light,
                    position: "absolute",
                    top: -150,
                  }}
                  // Find more Lottie files at https://lottiefiles.com/featured
                  source={require("../lottie/creating_course.json")}
                  speed={speed}
                />
                // <CircularProgress
                //   value={progress}
                //   progressValueStyle={styles.progressValue}
                //   valueSuffix="%"
                //   valueSuffixStyle={styles.progressValue}
                //   radius={100}
                //   activeStrokeWidth={30}
                //   inactiveStrokeWidth={5}
                //   progressValueColor={COLORS.dark}
                //   inActiveStrokeColor={COLORS.grey}
                //   // inActiveStrokeOpacity={1}
                //   activeStrokeColor={COLORS.dark}
                // />
              )}
            </View>
            {creatingCourse ? (
              <CreationHorizonalProgressBar value={progress} />
            ) : null}
            <View>
              <Text style={styles.progressDescription}>
                {!creatingCourse
                  ? "Course creation successful"
                  : "Creating course, please wait..."}
              </Text>
            </View>

            <View>
              {!creatingCourse ? (
                <Link style={styles.linkText} href={"/home"}>
                  Back to dashboard
                </Link>
              ) : (
                <Text style={styles.subText}>Relax while we create your learning path</Text>
              )}
            </View>
          </View>
        </ScrollView>
        {!creatingCourse ? (
          <View style={styles.createCourseButton}>
            {error ? (
              <Button text={"Retry"} type="reload-btn" onPress={goToCourse} />
            ) : (
              <Button
                text={"Continue to course"}
                type="create-course-btn"
                onPress={goToCourse}
              />
            )}
          </View>
        ) : null}
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CourseActionProgressScreen;
