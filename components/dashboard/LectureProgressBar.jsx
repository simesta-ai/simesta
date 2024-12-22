import { View, Animated } from "react-native";

import styles from "../../styles/screens/lectures.style";
import { useState, useEffect, useRef } from "react";

import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

const LectureProgressBar = ({ theme, value }) => {
  const [rightValue, setRightValue] = useState(0);
  const [leftValue, setLeftValue] = useState(0);
  const [rightCenterValue, setRightCenterValue] = useState(0);
  const [leftCenterValue, setLeftCenterValue] = useState(0);

  useEffect(() => {
    if (value <= 20) {
      setLeftValue((value / 20) * 100);
      setRightCenterValue(0);
      setLeftCenterValue(0);
      setRightValue(0);
    } else if (value > 20 && value <= 50) {
      setLeftValue(100);
      setRightCenterValue(0);
      setTimeout(() => {
        setLeftCenterValue(((value - 20) / 30) * 100);
      }, 1000)
      setRightValue(0);
    } else if (value > 50 && value <= 80) {
      setLeftValue(100);
      setTimeout(() => {
        setRightCenterValue(((value - 50) / 30) * 100);
      }, 1000)
      setLeftCenterValue(100);
      setRightValue(0);
    } else if (value > 80 && value <= 100) {
      setLeftValue(100);
      setRightCenterValue(100);
      setLeftCenterValue(100);
      setTimeout(() => {
        setRightValue(((value - 80) / 20) * 100);
      }, 1000)
    } else {
      setLeftValue(100);
      setRightCenterValue(100);
      setLeftCenterValue(100);
      setRightValue(100);
    }
  }, [value]);

  return (
    <View style={styles.barContainer}>
      <View style={[styles.edgeEmptyBar, styles[theme].edgeEmptyBar]}>
        <MotiView
          from={{ width: 0 }}
          animate={{ width: leftValue }}
          transition={{
            type: "timing",
            duration: 1000,
            easing: Easing.out(Easing.ease),
          }}
          style={styles.edgeActiveBar(leftValue)}
        />
      </View>
      <View style={[styles.emptyBar, styles[theme].emptyBar]}>
        <MotiView
          from={{ width: 0 }}
          animate={{ width: leftCenterValue }}
          transition={{
            type: "timing",
            duration: 1000,
            easing: Easing.out(Easing.ease),
          }}
          style={styles.activeBar(leftCenterValue)}
        />
      </View>
      <View style={[styles.emptyBar, styles[theme].emptyBar]}>
        <MotiView
          from={{ width: 0 }}
          animate={{ width: rightCenterValue }}
          transition={{
            type: "timing",
            duration: 1000,
            easing: Easing.out(Easing.ease),
          }}
          style={styles.activeBar(rightCenterValue)}
        />
      </View>
      <View style={[styles.edgeEmptyBar, styles[theme].edgeEmptyBar]}>
        <MotiView
          from={{ width: 0 }}
          animate={{ width: rightValue }}
          transition={{
            type: "timing",
            duration: 1000,
            easing: Easing.out(Easing.ease),
          }}
          style={styles.edgeActiveBar(rightValue)}
        />
      </View>
    </View>
  );
};

export default LectureProgressBar;
