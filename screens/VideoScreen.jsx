import {  Text, View, TouchableOpacity, Pressable } from 'react-native'

import styles from '../styles/screens/lectures.style'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { COLORS, SIZES } from '../constants';


const VideoScreen = ({ handleClose}) => {
  return (
    <View>
      <Pressable style={styles.closeButton} onPress={handleClose}>
      <MaterialCommunityIcons name="close" size={SIZES.xLarge} color={COLORS.light} />
      </Pressable>
      <View style={styles.videoContainer}>
        <Text>Video Screen</Text>
      </View>
    </View>
  )
}

export default VideoScreen

