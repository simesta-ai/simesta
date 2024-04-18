import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
  Image
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import { usePathname } from "expo-router";
import { TabBarContext } from "../context/TabBarContext";
import CustomTabBar from "../components/CustomTabBar";
import Button from "../components/Button"
import CourseTabs from "../components/CourseTabs";
import Overview from "../containers/course/Overview";
import Notes from "../containers/course/Notes";
import Quiz from "../containers/course/Quiz";

import { icons, COLORS, SIZES, images } from "../constants";
import { courseDetails } from "../constants/courses";

import styles from "../styles/screens/mainCourse.style";

const CourseMainScreen = ({ courseId }) => {
  const tabs = ["Overview", "Notes", "Quiz"];
  const { display, setDisplay } = useContext(TabBarContext);
  const [ activeTab, setActiveTab ] = useState(tabs[0])

    const displayTabContent = () => {
        switch (activeTab) {
          case "Overview":
            return <Overview description={courseDetails.description} topics={courseDetails.topics} />;
          case "Notes":
            return <Notes />;
          case "Quiz":
            return <Quiz />;
          default:
            break
        }
      };

  useEffect(() => {
    setDisplay(true);
  }, []);

  
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

            {/* Overview container */}
           
            <View style={styles.overViewContainer}>
              <View style={styles.courseImageContainer}>
                <Image style={styles.courseImage} source={courseDetails.image} resizeMode="cover" />
              </View>
              <View style={styles.courseNameAndProgress}>
                <Text style={styles.courseTitle}>{courseDetails.title}</Text>

                {/* Progress Bar */}
                <View style={styles.barContainer}>
                    <View style={styles.emptyBar}>
                      <View style={styles.activeBar(courseDetails.completed)} />
                    </View>
                  </View>
                <Text style={styles.completedText}>{courseDetails.completed}% completed</Text>
                
              </View>
              
            </View>

            <Button text='Resume course' type='accent-btn' />

          {/* Details Section */}

          <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

          {displayTabContent()}

          </View>
        </ScrollView>
        <CustomTabBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CourseMainScreen;
