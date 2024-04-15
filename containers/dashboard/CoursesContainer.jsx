import { Text, View, FlatList, Pressable } from "react-native";
import { useState } from "react";
import CourseCard from "../../components/CourseCard";

import styles from "../../styles/containers/courses.style";

import { COLORS, SIZES, courses } from "../../constants";

const CoursesContainer = () => {
  const allCourses = courses;
  const [activeType, setActiveType] = useState("Recent");
  const allTypes = ["Recent", "Recommended for you"];
  return (
    <View style={styles.container}>
      {/* Filter */}
      <View style={styles.filterContainer}>
        {allTypes.map((item, index) => (
          <Pressable
            key={index}
            style={styles.filter(activeType, item)}
            onPress={() => setActiveType(item)}
          >
            <Text style={styles.filterText(activeType, item)}>{item}</Text>
          </Pressable>
        ))}
      </View>

      {/* Course cards */}
      <FlatList
        data={allCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        horizontal
      />
    </View>
  );
};

export default CoursesContainer;