import CourseLectures from "../../../../../screens/CourseLectures";
import { useLocalSearchParams } from "expo-router";

const LecturesScreen = () => {
  const params = useLocalSearchParams();
  return <CourseLectures courseId={params.courseId} topicId={params.topicId} />;
};
export default LecturesScreen;
