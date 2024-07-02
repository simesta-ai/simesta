import {  Text, View, TouchableOpacity, ActivityIndicator } from 'react-native'
import { useState, useRef, useCallback, useEffect } from 'react';

import styles from '../styles/screens/lectures.style'

import YoutubePlayer from "react-native-youtube-iframe";
import Button from '../components/Button';
import RoundAccentButton from '../components/RoundAccentButton';

import { COLORS, SIZES } from '../constants';


const VideoScreen = ({ handleClose, videoLink}) => {

  const playerRef = useRef();
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true)
  
  // useEffect(()=> {
  //   if(playerRef.current){
  //     setLoading(false)
  //   }
  // }, [playerRef])

  return (
    <View>
      <View style={styles.videoContainer}>
        <Text style={styles.videoLectureText}>Video Lecture</Text>
        { loading ? (
          <View style={styles.loaderContainer}>
          <ActivityIndicator color={COLORS.primary} size={SIZES.xLarge} />
          </View>
        ) : null}
        <YoutubePlayer style={styles.youtubeVideo}
          width={400}
          height={300}
          play={playing}
          videoId={videoLink}
          onReady={() => {setLoading(false)}}
          />
        

      <View style={styles.buttonContainers}>
          <Button text={"Regenerate video"} type={"course-cancel-btn"} onPress={handleClose} />
          {/* <Button text={"Regenerate"} type={"course-save-btn"} onPress={handleClose} /> */}
          <RoundAccentButton icon={"save"} type={"round-accent-btn-big"} handlePress={handleClose} />
          {/* <RoundAccentButton icon={"refresh"} type={"round-accent-btn-big"} handlePress={handleClose} /> */}
      </View>
      
      
      </View>
      
    </View>
  )
}

export default VideoScreen

