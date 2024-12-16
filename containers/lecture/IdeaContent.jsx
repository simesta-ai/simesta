import { Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import { Skeleton } from "moti/skeleton";
import styles from "../../styles/screens/lectures.style";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import Mcq from "../../components/lecture/Mcq";
import OneChoiceQuestion from "../../components/lecture/OneChoiceQuestion";

const IdeaContent = ({
  ideaText,
  image,
  mcq,
  oneChoiceQuestion,
  setIsOnQuiz,
  scrollRef,
}) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [loadingImage, setLoadingImage] = useState(false);
  const opacity = useSharedValue(0);
  const translateY = useSharedValue(10);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    transform: [{ translateY: translateY.value }],
  }));

  const loadImage = async (text) => {
    try {
      const response = await fetch(
        "http://192.168.45.93:3000/api/chat/text-to-image",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text: text,
          }),
        }
      );
      const imageRes = await response.json();
      if (response.ok) {
        setImageUrl(imageRes.data);
      }
      setLoadingImage(false);
    } catch (error) {
      setLoadingImage(false);
      console.log(error);
    }
  };

  useEffect(() => {
    if (image) {
      setLoadingImage(true);
      loadImage(image);
    }
    opacity.value = withTiming(1, { duration: 500 });
    translateY.value = withTiming(0, { duration: 500 });
  }, []);
  

  return (
    <Animated.View style={[styles.ideaContent, animatedStyle]}>
      {image ? (
        <View style={styles.imageContainer}>
          {loadingImage ? (
            <Skeleton
              colorMode="light"
              style={styles.image}
              duration={1000}
              width={"100%"}
              height={100}
            />
          ) : (
            <Image
              source={{ uri: imageUrl }}
              style={styles.image}
              resizeMode="contain"
            />
          )}
        </View>
      ) : null}
      <Text style={styles.lectureContentText}>{ideaText}</Text>
      {mcq ? <Mcq mcq={mcq} setIsOnQuiz={setIsOnQuiz} /> : null}
      {oneChoiceQuestion ? (
        <OneChoiceQuestion
          oneChoiceQuestion={oneChoiceQuestion}
          setIsOnQuiz={setIsOnQuiz}
          scrollRef={scrollRef}
        />
      ) : null}
    </Animated.View>
  );
};

export default IdeaContent;
