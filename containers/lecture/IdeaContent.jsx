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
  //   useEffect(() => {
  //     console.log(image);
  //   });
  return (
    <View style={styles.ideaContent}>
      {image ? (
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: image }}
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