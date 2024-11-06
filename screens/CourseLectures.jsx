import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  RefreshControl,
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
import { Skeleton } from "moti/skeleton";
import { icons, COLORS, SIZES, images } from "../constants";
import styles from "../styles/screens/lectures.style";

import { activeCourseActions } from "../redux/slices/activeCourseSlice";

const CourseLectures = ({ courseId, topicId }) => {
  const activeCourse = useSelector((state) => state.course);
  const [ refreshing, setRefreshing] = useState(false)
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [topic, setTopic] = useState({
    name: "",
    lectures: [],
  });
  const [loading, setLoading] = useState(true);

  const getTopicDetails = async () => {
    const res = await fetch(
      `http://192.168.232.93:3000/api/courses/topic/${topicId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    const data = await res.json();
    console.log(data)
    if (data.message == "Unable to fetch topic content, no lectures exist") {
      const response = await fetch(
        `http://192.168.232.93:3000/api/courses/topic/${topicId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      const newData = await response.json();
      if (response.status == 200) {
        setTopic({
          ...topic,
          name: newData.topic.title,
          lectures: newData.lectures,
        });
        dispatch(activeCourseActions.setActiveTopic(newData.topic.id));
        setLoading(false);
      }
    }
    if (res.status == 200) {
      setTopic({
        ...topic,
        name: data.topic.title,
        lectures: data.lectures,
      });
      dispatch(activeCourseActions.setActiveTopic(data.topic.id));
      setLoading(false);
    }
  };

  const onRefresh = () => {
    setRefreshing(true);
    setLoading(true)
    setTimeout(()=> {
      setRefreshing(false);
    }, 2000)
    getTopicDetails();
  }

  useEffect(() => {
    getTopicDetails();
  }, []);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.backgroundGrey }}>
        <View
          style={{
            paddingBottom: 20,
          }}
        >
          <BackButtonContainer />
          <Text style={styles.headerText}>
            {topic.name.length > 30
              ? topic.name.slice(0, 29) + "..."
              : topic.name}
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {loading ? (
            <View style={styles.skeletonContainer}>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
              <View style={styles.skeleton}>
                <Skeleton colorMode="light" width={370} height={100}></Skeleton>
              </View>
            </View>
          ) : (
            <View style={styles.container}>
              {/* Overview container */}

              <View style={styles.courseImageContainer}>
                <Image
                  style={styles.courseImage}
                  source={{ uri: activeCourse.image }}
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
                data={topic.lectures.sort((a, b) => a.position - b.position)}
                scrollEnabled={false}
                renderItem={({ item }) => (
                  <Lecture key={item.id} lecture={item} />
                )}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                contentContainerStyle={{ rowGap: SIZES.small }}
              />
            </View>
          )}
        </ScrollView>
        <CustomTabBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CourseLectures;
