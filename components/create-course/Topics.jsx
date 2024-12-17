import {  Text, View, Pressable } from 'react-native'
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { courseCreationActions } from '../../redux/slices/courseCreationSlice';

import styles from '../../styles/screens/addCourse.style'
import { COLORS, SIZES } from '../../constants';

const Topics = ({ topic, theme }) => {

  const router = useRouter()
  const dispatch = useDispatch()

  const deleteTopic = () => {
    dispatch(courseCreationActions.deleteTopic(topic.id))
    
  }
  return (
    <View style={[styles.topicContainer, styles[theme].topicContainer]}>
      <Text style={[styles.topicText, styles[theme].topicText]}>{ topic.title.length > 30 ? topic.title.slice(0, 30) + "..." : topic.title}</Text>
    <Pressable onPress={deleteTopic} style={styles.deleteFileBtn}>
    <FontAwesome6 name="xmark" size={SIZES.regular} color={COLORS.light} />
    </Pressable>
    </View>
  )
}

export default Topics

