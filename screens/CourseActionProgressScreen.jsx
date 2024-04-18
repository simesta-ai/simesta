import {
    ScrollView,
    View,
    Text,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    TouchableOpacity
  } from "react-native";
  
  import { SafeAreaView } from "react-native-safe-area-context";
  import { useContext, useEffect } from "react";
  import CircularProgress from "react-native-circular-progress-indicator";
  import Button from "../components/Button";
  import { TabBarContext } from '../context/TabBarContext'

  
  import styles from "../styles/screens/courseActionProgress.style"
  import { icons, COLORS, SIZES } from "../constants";
import { router, Link } from "expo-router";

const CourseActionProgressScreen = () => {

    const { display, setDisplay} = useContext(TabBarContext);

    const value = 10
    const error = false

  useEffect(() => {
    setDisplay(false)
  
  }, [])

  const goToCourse = () => {
    router.navigate('/home')
  }
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
                <CircularProgress
                        value={value}
                        progressValueStyle={styles.progressValue}
                        valueSuffix='%'
                        valueSuffixStyle={styles.progressValue}
                        radius={100}
                        activeStrokeWidth={8}
                        inactiveStrokeWidth={5}
                        progressValueColor={COLORS.darkGrey}
                        inActiveStrokeColor={COLORS.grey}
                        // inActiveStrokeOpacity={1}
                        activeStrokeColor={COLORS.primary}
            />
                </View>

                <View>
                    <Text style={styles.progressDescription}>Generating topic content...</Text>
                </View>

                <View>
                    <Link style={styles.linkText} href={'/home'}>Back to dashboard</Link>
                </View>






          </View>
        </ScrollView>
        { value == 100 ? <View style={styles.createCourseButton}>
          <Button text={'Continue to course'} type="create-course-btn" onPress={goToCourse} />
          </View> : null }
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default CourseActionProgressScreen

