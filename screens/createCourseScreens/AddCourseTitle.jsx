import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useDispatch, useSelector } from "react-redux";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../../styles/screens/addCourse.style";
import { COLORS, SIZES, DARKMODECOLORS } from "../../constants";
import BackButtonContainer from "../../containers/BackButtonContainer";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";

import { courseCreationActions } from "../../redux/slices/courseCreationSlice";

const AddCourseTitle = () => {
  const { theme } = useContext(ThemeContext);
  const courseCreationTitle = useSelector(state => state.courseCreationDetails.title)
  const [title, setTitle] = useState(courseCreationTitle)
  const dispatch = useDispatch()
  const handleCancel = () => {
    router.navigate('/home')
  }
  const handleSave = (title) => () => {
    // save data to cache and navigate back
    dispatch(courseCreationActions.saveTitle(title));
    router.navigate('/create-course')
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{
        flex: 1, backgroundColor:
          theme === "light" ? COLORS.light : DARKMODECOLORS.dark
      }}>
        <StatusBar barStyle=
          {theme === "light" ? "dark-content" : "light-content"}
          backgroundColor={
            theme === "light" ? COLORS.backgroundGrey : DARKMODECOLORS.dark
          } />
        <View>
          <BackButtonContainer path="/home" />
          <Text style={[styles.headerText, styles[theme].headerText]}>Add new course</Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>


            <View style={styles.formContainer}>
              <Text style={[styles.label, styles[theme].label]}>Course Title</Text>
              <TextInputField
                style={styles.inputField}
                placeholder="Enter name of course"
                placeholderTextColor={COLORS.lightGrey}
                selectionColor={COLORS.primary}
                secureTextEntry={false}
                onChange={(text) =>
                  setTitle(text)
                }
              />
              <View style={styles.buttonContainer}>
                <Button text={'Cancel'} type={
                  theme === "light" ? "course-cancel-btn" : "white-action-btn"
                } onPress={handleCancel} />
                <Button text={'Save'} type="course-save-btn" onPress={handleSave(title)} />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default AddCourseTitle;
