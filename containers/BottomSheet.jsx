import { View, Dimensions, Pressable, Text } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { useRef, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import styles from "../styles/containers/lectureChat.style";
import AntDesign from "@expo/vector-icons/AntDesign";
import { COLORS } from "../constants";

const { height: screenHeight } = Dimensions.get("window");

const BottomSheet = ({ children, handleShowBottomSheet }) => {
  const {theme} = useContext(ThemeContext);
  const translateY = useSharedValue(0);
  const drag = Gesture.Pan()
    .onChange((event) => {
      translateY.value -= event.changeY;
    })
    .onEnd(() => {
      if (translateY.value > screenHeight * 0.8) {
        translateY.value = withSpring(screenHeight);
      }
      if (translateY.value < screenHeight * 0.5) {
        translateY.value = withSpring(screenHeight * 0.5);
      }
    });

  useEffect(() => {
    translateY.value = withSpring(screenHeight * 0.5); // Open to half the screen height
  }, []);

  const containerStyle = useAnimatedStyle(() => {
    return {
      height: translateY.value,
    };
  });

  const handleHide = () => {
    handleShowBottomSheet();
  };

  return (
    <GestureHandlerRootView style={styles.transparentBackground}>
      <Pressable onPress={handleHide} style={styles.closeBtn}>
        <AntDesign name="close" size={24} color={COLORS.light} />
      </Pressable>
      {/* <GestureDetector gesture={drag}> */}
      <Animated.View style={[containerStyle, styles.drawerContainer, styles[theme].drawerContainer]}>
        <GestureDetector gesture={drag}>
          <View style={styles.drawerLineCon}>
            <View style={[styles.drawerLine, styles[theme].drawerLine]} />
          </View>
        </GestureDetector>
        {children}
      </Animated.View>
      {/* </GestureDetector> */}
    </GestureHandlerRootView>
  );
};

export default BottomSheet;
