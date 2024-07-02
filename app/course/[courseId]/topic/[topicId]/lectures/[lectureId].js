import LectureScreen from "../../../../../../screens/LectureScreen";
import { useLocalSearchParams } from "expo-router";

const LearningLayout = () => {
   const params = useLocalSearchParams();
     return (
        <LectureScreen courseId={params.courseId} topicId={params.topicId} lectureId={params.lectureId} />
     )
}

export default LearningLayout;