import { Text, View, Pressable } from "react-native";
import styles from "../../styles/screens/lectures.style";
import { useState, useEffect } from "react";
import Button from "../Button";

const Option = ({ theme, option, onSelect, selectedOption, index }) => {
  const [isSelectedOption, setIsSelectedOption] = useState(false);

  useEffect(() => {
    console.log(option)
    if (selectedOption === index) {
      setIsSelectedOption(true);
    } else {
      setIsSelectedOption(false);
    }
  }, [selectedOption]);
  return (
    <Pressable
      onPress={() => onSelect(index)}
      style={[styles.optionCon(isSelectedOption), styles[theme].optionCon(isSelectedOption)]}
    >
      <View style={styles.radioBtnCon(isSelectedOption)}>
        <View style={styles.radioBtn(isSelectedOption)}></View>
      </View>
      <Text style={[styles.optionText(isSelectedOption), styles[theme].optionText(isSelectedOption)]}>{option}</Text>
    </Pressable>
  );
};

const Mcq = ({ theme, mcq, setIsOnQuiz }) => {
  const [selectedOption, setSelectedOption] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const handleSelect = (index) => {
    if (!submitted) {
      setSelectedOption(index);
    }
  };
  useEffect(() => {
    setIsOnQuiz(true)
  }, [])
  const handleSubmit = () => {
    if (selectedOption !== null) {
      setSubmitted(true);
      const selectedAnswer = mcq.options[selectedOption].text;
      if (selectedAnswer == mcq.answer.text) {
        setIsCorrect(true);
      }
      setIsOnQuiz(false)
    }
    
  };
  return (
    <View style={styles.mcqContainer}>
      <Text style={[styles.mcqIntroText, styles[theme].mcqIntroText]}>Quick question</Text>
      <Text style={[styles.mcQuestion, styles[theme].mcQuestion]}>{mcq.question}</Text>
      {mcq.options.map((option, index) => {
        return (
          <Option
          theme={theme}
            key={option.id}
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
          <Text style={[styles.answerText, styles[theme].answerText]}>{isCorrect ? "Correct." : "Wrong."}</Text>
          <Text style={[styles.answerText, styles[theme].answerText]}>{mcq.explanation}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Mcq;
