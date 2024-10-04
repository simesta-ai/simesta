import { Text, View, Image } from "react-native";
import { useState, useEffect } from "react";
import styles from "../../styles/screens/lectures.style";

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

  const loadImage = async (text) => {
    try {
      const response = await fetch(
        "https://truelearn-production.up.railway.app/chat/text-to-image",
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
        console.log(imageRes.data)
        setImageUrl(imageRes.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if(image){
      console.log(image)
      loadImage(image);
    }
  }, []);

  return (
    <View style={styles.ideaContent}>
      {image && imageUrl ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="contain"
          />
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
    </View>
  );
};

export default IdeaContent;
