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
import { useDispatch, useSelector } from "react-redux";
import { usePathname } from "expo-router";
import { TabBarContext } from "../context/TabBarContext";
import CustomTabBar from "../components/CustomTabBar";
import BackButtonContainer from "../containers/BackButtonContainer";
import Lecture from "../components/dashboard/Lecture";

import { icons, COLORS, SIZES, images } from "../constants";
import styles from "../styles/screens/lectures.style";


import { activeCourseActions } from "../redux/slices/activeCourseSlice";

const CourseLectures = ({ courseId, topicId }) => {
  const activeCourse = useSelector(state => state.course)
  const dispatch = useDispatch()
  const [topic, setTopic] = useState({
    name: "",
    lectures: [],
  });

  const getTopicDetails = async () => {
    const res = await fetch(
      `http://192.168.179.93:3000/users/course/topic/${topicId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    if (res.status == 200) {
      setTopic({
        ...topic,
        name: data.topic,
        lectures: data.lectures,
      });
      dispatch(activeCourseActions.setActiveTopic(data.topic.id))
    }
  };

  useEffect(() => {
    getTopicDetails();
  }, [])
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundGrey }}>
        <View>
          <BackButtonContainer path={`course/${courseId}`} />
          <Text style={styles.headerText}>
            {topic.name.length > 30
              ? topic.name.slice(0, 29) + "..."
              : topic.name}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          <View style={styles.container}>
            {/* Overview container */}

            <View style={styles.courseImageContainer}>
              <Image
                style={styles.courseImage}
                source={{uri: activeCourse.image}}
                resizeMode="cover"
              />
            </View>

            <View style={styles.overviewText}>
              <Text style={styles.overviewHeader}>Overview</Text>
              <Text style={styles.numberOfLectures}>
                {topic.lectures.length} lectures
              </Text>
            </View>

            <FlatList
              data={topic.lectures}
              scrollEnabled={false}
              renderItem={({ item }) => <Lecture lecture={item} />}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ rowGap: SIZES.small }}
            />
          </View>
        </ScrollView>
        <CustomTabBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CourseLectures;
