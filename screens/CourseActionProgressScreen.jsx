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
import LottieView from "lottie-react-native";

import styles from "../styles/screens/courseActionProgress.style";
import { icons, COLORS, SIZES } from "../constants";
import { router, Link } from "expo-router";

const CourseActionProgressScreen = () => {
  const { display, setDisplay } = useContext(TabBarContext);
  const [ speed, setSpeed ] = useState(1)

  const value = 100;
  const error = false;
  const animationRef = useRef(null);

  useEffect(() => {
    if(value == 100) {
        setSpeed(1)
        animationRef.current?.play();
        setTimeout(() => {
            setSpeed(0)
        }, 1700)
    }
  }, [value]);

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
              {value == 100 ? (
                <LottieView
                  autoPlay
                  ref={animationRef}
                  style={{
                    width: 150,
                    height: 150,
                    backgroundColor: COLORS.light,
                  }}
                  // Find more Lottie files at https://lottiefiles.com/featured
                  source={require('../lottie/completion_icon.json')}
                  speed={speed}
                />
              ) : (
                <CircularProgress
                  value={value}
                  progressValueStyle={styles.progressValue}
                  valueSuffix="%"
                  valueSuffixStyle={styles.progressValue}
                  radius={100}
                  activeStrokeWidth={8}
                  inactiveStrokeWidth={5}
                  progressValueColor={COLORS.darkGrey}
                  inActiveStrokeColor={COLORS.grey}
                  // inActiveStrokeOpacity={1}
                  activeStrokeColor={COLORS.primary}
                />
              )}
            </View>

            <View>
              <Text style={styles.progressDescription}>
                { value == 100 ? "Course creation successful" : "Creating course..."}
              </Text>
            </View>

            <View>
              <Link style={styles.linkText} href={"/home"}>
                Back to dashboard
              </Link>
            </View>
          </View>
        </ScrollView>
        {value == 100 ? (
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
