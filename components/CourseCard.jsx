import { Text, View, Image, Pressable } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { activeCourseActions } from "../redux/slices/activeCourseSlice";
import { useRouter } from "expo-router";
import RoundProgressBar from "./dashboard/RoundProgressBar";
import HorizontalProgressBar from "./dashboard/HorizontalProgressBar";

import styles from "../styles/containers/courses.style";

import { COLORS, SIZES } from "../constants";

const CourseCard = ({ position, course }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    console.log(course)
  }, [])

  const goToCourse = () => {
    dispatch(
      activeCourseActions.setActiveCourse({
        id: course.id,
        title: course.title,
      })
    );
    router.navigate(`/course/${course.id}`);
  };
  return (
    <Pressable
      style={styles.courseCardContainer(position, theme)}
      onPress={goToCourse}
    >
      {/* {position === "dashboard" && <RoundProgressBar value={course.progress} />} */}
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: course.img }}
          resizeMode="cover"
        />
      </View>
      {/* <Text style={styles.categoryText(course.color)}>{course.category.toUpperCase()}</Text> */}
      <Text style={[styles.courseTitle, styles[theme].courseTitle]}>{course.title.slice(0, 35)}</Text>
      <Text style={[styles.topicsCompleted, styles[theme].topicsCompleted]}>
        {course.topicsCompleted} Topics completed
      </Text>
      <HorizontalProgressBar value={40} theme={theme} />
      {/* {position === "course-page" && <HorizontalProgressBar value={course.progress} />} */}
    </Pressable>
  );
};

export default CourseCard;
