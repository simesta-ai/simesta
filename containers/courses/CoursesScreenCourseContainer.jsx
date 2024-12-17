import { Text, FlatList, View, Image } from "react-native";
import React, { useState, useEffect, useCallback, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { useFocusEffect } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import CourseCard from "../../components/CourseCard";
// import { NestableScrollContainer, NestableDraggableFlatList } from 'react-native-draggable-flatlist'

import courseStyles from "../../styles/screens/courseScreen.style";
import skeletonStyles from "../../styles/containers/courses.style";

import { SIZES } from "../../constants";
import { Skeleton } from "moti/skeleton";
import Button from "../../components/Button";
import HorizontalProgressBar from "../../components/dashboard/HorizontalProgressBar";

const CoursesScreenCourseContainer = () => {
  const { theme } = useContext(ThemeContext);
  const router = useRouter();
  const user = useSelector((state) => state.user);
  const [courses, setCourses] = useState([]);
  const [currentCourse, setCurrentCourse] = useState(null)
  const [startedCourses, setStartedCourses] = useState(false);
  const [loadingCourses, setLoadingCourses] = useState(true);

  const getUserCourses = async () => {
    const res = await fetch(
      `http://192.168.60.93:3000/api/courses/users/${user.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    const data = await res.json();
    if (data.message == "User does not have any course created yet") {
      setStartedCourses(false)
      setLoadingCourses(false)
      return
    }
    if (res.status == 200) {
      setCourses(data.courses);
      setCurrentCourse(data.courses[0])
      setLoadingCourses(false);
      setStartedCourses(true);

    } else {
      Toast.show({
        type: "error",
        text1: "Please try again",
        text2: json.message,
      });
    }
  };

  const handleCreateCourse = () => {
    router.push("/new-course");
  }

  useFocusEffect(
    useCallback(() => {
      getUserCourses();
      return () => null
    }, [])
  );

  useEffect(() => {
    getUserCourses();
  }, []);
  return (
    <View>
      {loadingCourses ? (
        <>
          <View style={skeletonStyles.skeleton}>
            <Skeleton colorMode={
              theme === "light" ? "light" : "dark"
            } width={370} height={150}></Skeleton>
          </View>
          <View style={skeletonStyles.skeleton}>
            <Skeleton colorMode={
              theme === "light" ? "light" : "dark"
            } width={370} height={150}></Skeleton>
          </View>
          <View style={skeletonStyles.skeleton}>
            <Skeleton colorMode={
              theme === "light" ? "light" : "dark"
            } width={370} height={150}></Skeleton>
          </View>
          <View style={skeletonStyles.skeleton}>
            <Skeleton colorMode={
              theme === "light" ? "light" : "dark"
            } width={370} height={150}></Skeleton>
          </View>
        </>
      ) : !startedCourses ? (
        <View>
          <Text style={[courseStyles.addCourseText, courseStyles[theme].addCourseText]}>No courses added yet</Text>
          <Button text={"Add course"} type={"form-action-btn"} onPress={handleCreateCourse} />
        </View>
      ) : (
        <View style={courseStyles.courseWrapper}>
          {/*Continue from the last course you were learning */}
          <Text style={[courseStyles.subHeaders, courseStyles[theme].subHeaders]}>Pick up where you left off</Text>
          <View style={[courseStyles.continueCourseContainer, courseStyles[theme].continueCourseContainer]}>
            <Image style={courseStyles.continueCourseImage} width={100} height={100} source={{ uri: currentCourse.img }} />
            <Text style={[courseStyles.continueCourseICompletedTopics, courseStyles[theme].continueCourseICompletedTopics]}>{currentCourse.topicsCompleted} Topics completed</Text>
            <HorizontalProgressBar theme={theme} value={20} />
            <Text style={[courseStyles.continueCourseTitle, courseStyles[theme].continueCourseTitle]}>{currentCourse.title}</Text>
            {/* <Text style={[courseStyles.continueCourseDescription, courseStyles[theme].continueCourseDescription]}>{currentCourse.description}...</Text> */}
            <Button text={"Continue"} type={
              theme === "light" ? "form-action-btn" : "white-action-btn"
            } />
          </View>

          <Text style={courseStyles.subHeaders}>My courses</Text>
          <FlatList
            data={courses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <CourseCard position="course-page" course={item} />
            )}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={courseStyles.listContainer}
            scrollEnabled={false}
          />
        </View>
      )}
    </View>
  );
};

export default CoursesScreenCourseContainer;
