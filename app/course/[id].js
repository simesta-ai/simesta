import CourseMainScreen from "../../screens/CourseMainScreen";
import { useLocalSearchParams } from "expo-router";

const CourseMain = () => {

    const params = useLocalSearchParams();
    return (
        <CourseMainScreen courseId={params.id} />
    )
}
export default CourseMain;