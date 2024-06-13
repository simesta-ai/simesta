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

const AddTopic = () => {

    const [ formValues, setFormValues ] = useState({
        title: '',
        subtopics: ''
    })

    const handleCancel = () => {
        router.navigate('/create-course')
    }
    const handleSave = () => {
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
      <BackButtonContainer path="/create-course" />
        <Text style={styles.headerText}>Data Analytics</Text>
      </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>
            

            <View style={styles.formContainer}>
              <View style={styles.fieldSection}>
              <Text style={styles.label}>Name of topic</Text>
              <TextInputField
                style={styles.inputField}
                placeholder="Enter name of topic"
                placeholderTextColor={COLORS.lightGrey}
                selectionColor={COLORS.primary}
                secureTextEntry={false}
                onChange={(text) => setFormValues({...formValues, title: text})}
              />
              </View>
              <View style={styles.fieldSection}>
              <Text style={styles.label}>Subtopics<Text style={styles.subText}> (optional)</Text></Text>
              <TextInputField
                style={styles.inputField}
                placeholder="Enter subtopics separated by commas"
                placeholderTextColor={COLORS.lightGrey}
                selectionColor={COLORS.primary}
                secureTextEntry={false}
                onChange={(text) => setFormValues({...formValues, subtopics: text})}
              />
              </View>
              
            </View>
          </View>
        </ScrollView>
        <View style={styles.bottomButtonContainer}>
                <Button text={'Cancel'} type="course-cancel-btn" onPress={handleCancel} />
                <Button text={'Save'} type="course-save-btn" onPress={handleSave} />
              </View>
      </SafeAreaView>
    </KeyboardAvoidingView>
  )
}

export default AddTopic

