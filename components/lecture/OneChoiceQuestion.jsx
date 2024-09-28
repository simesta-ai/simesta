import { Text, View, TextInput } from "react-native";
import { useState, useEffect } from "react";
import Button from "../Button";

import styles from "../../styles/screens/lectures.style";
import { COLORS } from "../../constants";

const OneChoiceQuestion = ({ oneChoiceQuestion, setIsOnQuiz, scrollRef }) => {
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (text.length > 0) {
      setSubmitted(true);
      setIsOnQuiz(false);
    }
  };
  const handleFocus = () => {
    scrollRef.current.scrollToEnd({ animated: true });
  };
  useEffect(() => {
    setIsOnQuiz(true);
  }, []);

  return (
    <View>
      <Text style={styles.mcQuestion}>{oneChoiceQuestion.question}</Text>
      <TextInput
        style={styles.textArea}
        value={text}
        selectionColor={COLORS.dark}
        onChangeText={setText}
        placeholder="Type your answer here..."
        multiline={true}
        numberOfLines={4}
        textAlignVertical="top"
        editable={!submitted}
        onFocus={handleFocus}
      />
      {!submitted ? (
        <View style={styles.submitQuizCon}>
          <Button
            text={"Submit"}
            onPress={handleSubmit}
            type="submit-answer-btn"
          />
        </View>
      ) : null}
      {submitted ? (
        <View style={styles.answerCon}>
          <Text style={styles.answerText}>{oneChoiceQuestion.explanation}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default OneChoiceQuestion;
