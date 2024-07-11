import { Text, View, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import CourseCard from "../../components/CourseCard";
import RecommendedCourseCard from "../../components/dashboard/RecommendedCourseCard";
import Button from "../../components/Button";
import { Skeleton } from "moti/skeleton";

import styles from "../../styles/containers/courses.style";
import { COLORS, SIZES } from "../../constants";
import { coursesActions } from "../../redux/slices/coursesSlice";

const CoursesContainer = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const cachedCourses = useSelector(state => state.allcourses)
  const [ courses, setCourses ] = useState([])
  const [startedCourses, setStartedCourses] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(true);
  const [loadingRecommended, setLoadingRecommended] = useState(false);

  const getUserCourses = async () => {
    if(cachedCourses.length > 0){
      setCourses(cachedCourses)
      setLoadingCourses(prev => !prev)
    } else {
      const res = await fetch(`http://192.168.146.93:3000/users/${user.id}/courses`, {
        method: "GET", 
        headers: { "Content-Type": "application/json" }
      });
      const data = await res.json()
      if(res.status == 200) {
        setCourses(data.courses)
        dispatch(coursesActions.setAvailableCourses(data.courses))
        setLoadingCourses(prev => !prev)
        if(data?.courses.length > 0) {
          setStartedCourses(prev => !prev)
        }
      } else {
        Toast.show({
          type: 'error',
          text1: 'Please try again',
          text2: json.message
        });
      }
    }
   
  }

  useEffect(() => {
    getUserCourses();
  }, [])
  return (
    <View style={styles.container}>
      

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
            <Pressable>
              <Text style={styles.seeAllAction}>See All</Text>
            </Pressable>
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
      ) : (
        <View style={styles.startLearningContainer}>
          <View style={styles.startLearningPromptContainer}>
            <Text style={styles.startLearningText}>
              Begin your learning journey by creating a course or selecting from
              our recommended choices.
            </Text>
          </View>
          <View style={styles.startLearningButtonContainer}>
            <Button text={"Start learning"} type={"form-action-btn"} />
          </View>
        </View>
      )}

      <View style={styles.courseCategoryHeader}>
        <Text style={styles.greeting}>Recommended</Text>
        <Pressable>
          <Text style={styles.seeAllAction}>See All</Text>
        </Pressable>
      </View>
      <View style={styles.recSkeleton}>
      <Skeleton colorMode="light" width={380} height={50} >
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
      { loadingRecommended ? <Skeleton colorMode="light" width={380} height={50} ></Skeleton> : null}
      { loadingRecommended ? <Skeleton colorMode="light" width={380} height={50} ></Skeleton> : null}
      </View>
    </View>
  );
};

export default CoursesContainer;
