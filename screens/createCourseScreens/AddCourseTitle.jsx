import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

import styles from "../../styles/screens/addCourse.style";
import { COLORS, SIZES } from "../../constants";
import BackButtonContainer from "../../containers/BackButtonContainer";
import TextInputField from "../../components/auth/TextInputField";
import Button from "../../components/Button";

const AddCourseTitle = () => {

  const [ title, setTitle ] = useState('')
  const handleCancel = () => {
    router.navigate('/home')
}
const handleSave = (title) => () => {
  // send data to server and navigate back
  router.navigate('/create-course')
}

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
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
              <Text style={styles.label}>Course Title</Text>
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
                <Button text={'Cancel'} type="course-cancel-btn" onPress={handleCancel} />
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
