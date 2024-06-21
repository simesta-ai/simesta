import { Text, View, FlatList, Pressable } from "react-native";
import { useState } from "react";
import CourseCard from "../../components/CourseCard";
import RecommendedCourseCard from "../../components/dashboard/RecommendedCourseCard";
import Button from "../../components/Button";

import styles from "../../styles/containers/courses.style";

import { COLORS, SIZES, courses } from "../../constants";

const CoursesContainer = () => {
  const allCourses = courses;
  const [activeType, setActiveType] = useState("Recent");
  const [startedCourses, setStartedCourses] = useState(false);
  const allTypes = ["Recent", "Recommended for you"];
  return (
    <View style={styles.container}>
      {/* Filter */}
      {/* <View style={styles.filterContainer}>
        {allTypes.map((item, index) => (
          <Pressable
            key={index}
            style={styles.filter(activeType, item)}
            onPress={() => setActiveType(item)}
          >
            <Text style={styles.filterText(activeType, item)}>{item}</Text>
          </Pressable>
        ))}
      </View> */}

      {/* Course cards */}
      {startedCourses ? (
        <View>
          <View style={styles.courseCategoryHeader}>
            <Text style={styles.greeting}>In Progress</Text>
            <Pressable>
              <Text style={styles.seeAllAction}>See All</Text>
            </Pressable>
          </View>
          <FlatList
            data={allCourses}
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
            <Text style={styles.startLearningText}>Begin your learning journey by creating a course or selecting from our recommended choices.</Text>
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
      <FlatList
        data={allCourses.slice(0,3)}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RecommendedCourseCard course={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ rowGap: SIZES.large }}
        scrollEnabled={false}
      />
    </View>
  );
};

export default CoursesContainer;
