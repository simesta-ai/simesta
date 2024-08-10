import {  Text, View, Pressable } from 'react-native'
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { courseCreationActions } from '../../redux/slices/courseCreationSlice';

import styles from '../../styles/screens/addCourse.style'
import { COLORS, SIZES } from '../../constants';

const Topics = ({ topic }) => {

  const router = useRouter()
  const dispatch = useDispatch()

  const deleteTopic = () => {
    dispatch(courseCreationActions.deleteTopic(topic.id))
    
  }
  return (
    <View style={styles.topicContainer}>
      <Text style={styles.topicText}>{ topic.title.length > 30 ? topic.title.slice(0, 30) + "..." : topic.title}</Text>
    <Pressable onPress={deleteTopic} style={styles.editTopicButton}>
    <FontAwesome6 name="xmark" size={SIZES.regular} color={COLORS.dark} />
    </Pressable>
    </View>
  )
}

export default Topics

