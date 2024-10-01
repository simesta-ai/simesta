import { Text, View, Pressable } from "react-native";
import styles from "../../styles/screens/lectures.style";
import { useState, useEffect } from "react";
import Button from "../Button";

const Option = ({ option, onSelect, selectedOption, index }) => {
  const [isSelectedOption, setIsSelectedOption] = useState(true);

  useEffect(() => {
    if (selectedOption == index) {
      setIsSelectedOption(true);
    } else {
      setIsSelectedOption(false);
    }
  }, [selectedOption]);
  return (
    <Pressable
      onPress={() => onSelect(index)}
      style={styles.optionCon(isSelectedOption)}
    >
      <View style={styles.radioBtnCon(isSelectedOption)}>
        <View style={styles.radioBtn(isSelectedOption)}></View>
      </View>
      <Text style={styles.optionText(isSelectedOption)}>{option}</Text>
    </Pressable>
  );
};

const Mcq = ({ mcq, setIsOnQuiz }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (index) => {
    if (!submitted) {
      setSelectedOption(index);
    }
  };
  useEffect(() => {
    console.log(mcq)
    setIsOnQuiz(true)
  }, [])
  const handleSubmit = () => {
    if (selectedOption !== null) {
      setSubmitted(true);
      const selectedAnswer = mcq.options[selectedOption];
      if (selectedAnswer.text == mcq.answers[0].text) {
        setIsCorrect(true);
      }
      setIsOnQuiz(false)
    }
    
  };
  return (
    <View style={styles.mcqContainer}>
      <Text style={styles.mcqIntroText}>Quick question</Text>
      <Text style={styles.mcQuestion}>{mcq.question}</Text>
      {mcq.options.map((option, index) => {
        return (
          <Option
            key={option.text}
            option={option.text}
            onSelect={handleSelect}
            selectedOption={selectedOption}
            index={index}
          />
        );
      })}
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
          <Text style={styles.answerText}>{isCorrect ? "Correct." : "Wrong."}</Text>
          <Text style={styles.answerText}>{mcq.explanation}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Mcq;
