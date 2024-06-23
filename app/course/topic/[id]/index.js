import CourseLectures from "../../../../screens/CourseLectures";
import { useLocalSearchParams } from "expo-router"

const LecturesScreen = () => {
    const params = useLocalSearchParams();
    return <CourseLectures topicId={params.id} />;
  };
  export default LecturesScreen;