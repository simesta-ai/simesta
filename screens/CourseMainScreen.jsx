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
  import { usePathname } from "expo-router";
  import { TabBarContext } from '../context/TabBarContext'

  
  import { icons, COLORS, SIZES } from "../constants";


import styles from '../styles/screens/mainCourse.style'

const CourseMainScreen = ({ courseId }) => {

    const { display, setDisplay } = useContext(TabBarContext);

    useEffect(() => {
        setDisplay(true)
    
    }, [])
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
            <Text>Course Page {courseId}</Text>


          </View>
        </ScrollView>
        <Text>Costom Footer</Text>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default CourseMainScreen

