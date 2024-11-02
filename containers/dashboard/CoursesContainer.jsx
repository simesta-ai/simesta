import { Text, View, FlatList, Pressable } from "react-native";
import {
  useEffect,
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Toast from "react-native-toast-message";
import { userActions } from "../../redux/slices/userSlice";
import { authActions } from "../../redux/slices/authSlice";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import CourseCard from "../../components/CourseCard";
import RecommendedCourseCard from "../../components/dashboard/RecommendedCourseCard";
import Button from "../../components/Button";
import { Skeleton } from "moti/skeleton";
import LottieView from "lottie-react-native";

import styles from "../../styles/containers/courses.style";
import { COLORS, SIZES } from "../../constants";
import { coursesActions } from "../../redux/slices/coursesSlice";

const CoursesContainer = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const cachedCourses = useSelector((state) => state.allcourses);
  const [courses, setCourses] = useState([]);
  const [startedCourses, setStartedCourses] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(false);
  const [loadingRecommended, setLoadingRecommended] = useState(false);

  const getUserCourses = async () => {
    setLoadingCourses(true);
    if (cachedCourses.length > 0) {
      setCourses(cachedCourses);
      setLoadingCourses((prev) => !prev);
    } else {
      try {
        const res = await fetch(
          `http://192.168.232.93:3000/api/courses/users/${user.id}`,
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
        if (data.message == "User does not have any course created yet") {
          setStartedCourses(false);
          setLoadingCourses(false);
          return;
        }
        setLoadingCourses(false);
        if (res.status == 200) {
          setCourses(data.courses);
          dispatch(coursesActions.setAvailableCourses(data.courses));
          setLoadingCourses((prev) => !prev);
          if (data?.courses.length > 0) {
            setStartedCourses(true);
          }
        } else {
          Toast.show({
            type: "error",
            text1: "Please try again",
            text2: json.message,
          });
        }
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error",
          text2: error.message,
        });
      }
      setLoadingCourses((prev) => !prev);
    }
  };

  useImperativeHandle(ref, () => ({
    getUserCourses,
  }));


  const createCourse = () => {
    router.push("/new-course");
  };

  useFocusEffect(
    useCallback(() => {
      getUserCourses();
      return () => null;
    }, [])
  );

  useEffect(() => {
    getUserCourses();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.startLearningContainer}>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            style={{
              width: 200,
              height: 200,
              backgroundColor: COLORS.light,
            }}
            // Find more Lottie files at https://lottiefiles.com/featured
            source={require("../../lottie/start_learning.json")}
            speed={1}
          />
        </View>
        <View style={styles.startLearningCtaContainer}>
          <View style={styles.startLearningPromptContainer}>
            <Text style={styles.startLearningText}>
              Create a course and begin your learning journey.
            </Text>
          </View>
          <View style={styles.startLearningButtonContainer}>
            <Button
              text={"Start learning"}
              type={"course-cancel-btn"}
              onPress={createCourse}
            />
          </View>
        </View>
      </View>
      {/* Course cards */}
      {loadingCourses ? (
        <View style={styles.skeleton}>
          <Skeleton colorMode="light" width={200} height={170}></Skeleton>
          <Skeleton colorMode="light" width={200} height={170}></Skeleton>
        </View>
      ) : startedCourses ? (
        <View>
          <View style={styles.courseCategoryHeader}>
            <Text style={styles.greeting}>In Progress</Text>
            {/* <Pressable>
              <Text style={styles.seeAllAction}>See All</Text>
            </Pressable> */}
          </View>
          <FlatList
            style={styles.coursesList}
            data={courses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CourseCard position="dashboard" course={item} />
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        </View>
      ) : null}

      {/* <View style={styles.courseCategoryHeader}>
        <Text style={styles.greeting}>Recommended</Text>
      </View> */}
      {/* <View style={styles.recSkeleton}>
        <Skeleton colorMode="light" width={380} height={50}>
          {loadingRecommended ? null : (
            <FlatList
              data={courses.slice(0, 3)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <RecommendedCourseCard course={item} />}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ rowGap: SIZES.large }}
              scrollEnabled={false}
            />
          )}
        </Skeleton>
        {loadingRecommended ? (
          <Skeleton colorMode="light" width={380} height={50}></Skeleton>
        ) : null}
        {loadingRecommended ? (
          <Skeleton colorMode="light" width={380} height={50}></Skeleton>
        ) : null}
      </View> */}
    </View>
  );
});

export default CoursesContainer;
