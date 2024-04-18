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
import { useContext, useEffect } from "react";
import { TabBarContext } from '../context/TabBarContext'
import DashboardSearch from "../components/dashboard/DashboardSearch";
import CourseCard from "../components/CourseCard";

import styles from "../styles/screens/dashboard.style";
import courseStyles from "../styles/screens/courseScreen.style";
import { icons, COLORS, SIZES, courses } from "../constants";
import CoursesScreenCourseContainer from "../containers/courses/CoursesScreenCourseContainer";

const CoursesScreen = () => {

  const [activeType, setActiveType] = useState("All");
  const allTypes = ["All", "In progress", "Completed"];

  const { display, setDisplay} = useContext(TabBarContext);
  useEffect(() => {
    setDisplay(true)
  
  }, [])
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
    
          <View style={styles.container}>
            <Text style={styles.greeting}>My courses</Text>
            <DashboardSearch placeholder="search your courses" />
            {/* Courses Filter */}
            <View style={courseStyles.filterContainer}>
              {allTypes.map((item, index) => (
                <Pressable
                  key={index}
                  style={courseStyles.filter(activeType, item)}
                  onPress={() => setActiveType(item)}
                >
                  <Text style={courseStyles.filterText(activeType, item)}>{item}</Text>
                </Pressable>
              ))}
            </View>
            <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View  style={[courseStyles.coursePageContainer]}>
            
            {/* Courses Container */}
            <CoursesScreenCourseContainer />

          </View>
          </ScrollView> 
          </View>
  
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default CoursesScreen

