import { Text, View, TouchableOpacity, ActivityIndicator } from "react-native";
import { useState, useRef, useCallback, useEffect } from "react";

import styles from "../styles/screens/lectures.style";

import YoutubePlayer from "react-native-youtube-iframe";
import Button from "../components/Button";
import RoundAccentButton from "../components/RoundAccentButton";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { COLORS, SIZES } from "../constants";

const VideoScreen = ({ handleClose, videos }) => {
  const playerRef = useRef();
  const [ videoIndex, setVideoIndex ] = useState(3)
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleGenerate = () => {
    setLoading(true)
    setVideoIndex(Math.floor(Math.random() * 10))
    setLoading(false)
  }
  useEffect(() => {
    setVideoIndex(3)
  }, [])

  useEffect(()=> {
    if(playerRef.current){
      setLoading(false)
    }
  }, [playerRef])

  return (
    <View>
      <View style={styles.videoContainer}>
        <Text style={styles.videoLectureText}>Video Lecture</Text>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator color={COLORS.primary} size={SIZES.xLarge} />
          </View>
        ) : null}
        <YoutubePlayer
          style={styles.youtubeVideo}
          width={400}
          height={300}
          play={playing}
          videoId={videos[videoIndex]}
          onReady={() => {
            setLoading(false);
          }}
        />

        <View style={styles.buttonContainers}>
          <Button
            text={"Regenerate video"}
            type={"course-cancel-btn"}
            onPress={handleGenerate}
          />
          <RoundAccentButton
            icon={<FontAwesome6 name="save" size={SIZES.medium} color={COLORS.light} />}
            type={"round-accent-btn-big"}
            handlePress={handleClose}
          />
        </View>
      </View>
    </View>
  );
};

export default VideoScreen;
