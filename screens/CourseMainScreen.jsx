import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  TouchableOpacity,
  StatusBar,
  Image,
  BackHandler,
} from "react-native";
import { Skeleton } from "moti/skeleton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext, useEffect, useState } from "react";
import { router, useNavigation, usePathname } from "expo-router";
import { TabBarContext } from "../context/TabBarContext";
import CustomTabBar from "../components/CustomTabBar";
import Button from "../components/Button";
import CourseTabs from "../components/CourseTabs";
import Overview from "../containers/course/Overview";
import Notes from "../containers/course/Notes";
import Quiz from "../containers/course/Quiz";

import { icons, COLORS, SIZES, images } from "../constants";
import { courseDetails } from "../constants/courses";

import styles from "../styles/screens/mainCourse.style";

const CourseMainScreen = ({ courseId }) => {
  const [loadingDetails, setLoadingDetails] = useState(true);
  const [courseDetails, setCourseDetails] = useState({
    title: "",
    description: "",
    topics: [],
    image: "",
    progress: 0,
  });
  const tabs = ["Overview", "Notes", "Quiz"];
  const { display, setDisplay } = useContext(TabBarContext);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const getCourseDetails = async () => {
    const res = await fetch(
      `http://192.168.130.93:3000/users/course/${courseId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    if (res.status == 200) {
      setCourseDetails({
        ...courseDetails,
        title: data.course.title,
        description: data.course.description,
        topics: data.topics,
        image: data.course.image,
        progress: data.course.progress
      });
      setLoadingDetails(prev => !prev)
    }
  };
  useEffect(() => {
    getCourseDetails();
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <Overview
            description={courseDetails.description}
            topics={courseDetails.topics}
          />
        );
      case "Notes":
        return <Notes />;
      case "Quiz":
        return <Quiz />;
      default:
        break;
    }
  };

  const handleCustomBackPress = () => {
    // Perform any actions before navigation (e.g., confirmation dialog)
    router.navigate("/home");
  };

  useEffect(() => {
    setDisplay(true);
    const backHandlerSubscription = BackHandler.addEventListener(
      "hardwareBackPress",
      handleCustomBackPress
    );

    return () => backHandlerSubscription.remove();
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={COLORS.backgroundGrey}
        />
        <ScrollView
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="always"
        >
          {loadingDetails ? (
            <View style={styles.skeletonContainer}>
              {/* Info skeleton */}
              <View style={styles.infoSkeleton}>
                <Skeleton
                  width={90}
                  height={90}
                  radius={"round"}
                  colorMode="light"
                ></Skeleton>
                <View style={styles.nameSkeleton}>
                  <Skeleton
                    width={200}
                    height={20}
                    radius={"round"}
                    colorMode="light"
                  ></Skeleton>
                  <Skeleton
                    width={250}
                    height={20}
                    radius={"round"}
                    colorMode="light"
                  ></Skeleton>
                </View>
              </View>
              <Skeleton
                    width={350}
                    height={50}
                    radius={5}
                    colorMode="light"
                  ></Skeleton>
              <Skeleton
                    width={350}
                    height={200}
                    radius={5}
                    colorMode="light"
                  ></Skeleton>
              <Skeleton
                    width={350}
                    height={50}
                    radius={5}
                    colorMode="light"
                  ></Skeleton>
              <Skeleton
                    width={350}
                    height={50}
                    radius={5}
                    colorMode="light"
                  ></Skeleton>
              <Skeleton
                    width={350}
                    height={50}
                    radius={5}
                    colorMode="light"
                  ></Skeleton>
            </View>
          ) : (
            <View style={styles.container}>
              {/* Overview container */}

              <View style={styles.overViewContainer}>
                <View style={styles.courseImageContainer}>
                  <Image
                    style={styles.courseImage}
                    source={{ uri: courseDetails.image }}
                    resizeMode="cover"
                  />
                </View>
                <View style={styles.courseNameAndProgress}>
                  <Text style={styles.courseTitle}>{courseDetails.title}</Text>

                  {/* Progress Bar */}
                  <View style={styles.barContainer}>
                    <View style={styles.emptyBar}>
                      <View style={styles.activeBar(courseDetails.completed)} />
                    </View>
                  </View>
                  <Text style={styles.completedText}>
                    {courseDetails.progress}% completed
                  </Text>
                </View>
              </View>

              <Button text="Resume course" type="accent-btn" />

              {/* Details Section */}

              <CourseTabs
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabs={tabs}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>
        <CustomTabBar />
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default CourseMainScreen;
