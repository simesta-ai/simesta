import {
  Text,
  ScrollView,
  FlatList,
  View,
  Image,
  useWindowDimensions,
  Animated,
  TouchableOpacity,
  Pressable,
  Keyboard,
  StatusBar,
} from "react-native";
// import Animated from "react-native-reanimated";
import { useState, useRef } from "react";
import { useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { COLORS, DARKMODECOLORS, onboardDetails } from "../constants";
import styles from "../styles/screens/onboarding.style";

const OnboardScreen = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeContext);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(
    onboardDetails[currentIndex]
  );
  const { width } = useWindowDimensions()
  const scrollX = useRef(new Animated.Value(0)).current;
  const slideRef = useRef(null);

  const viewableItemsChanged = useRef(
    ({ viewableItems }) => {
      if(viewableItems.length > 0){
        setCurrentIndex(viewableItems[0].index)
        setCurrentSlide(onboardDetails[viewableItems[0].index])
      }
    }
  ).current

  const viewConfig = useRef(
    { viewAreaCoveragePercentThreshold: 50 }
  ).current
  

  const getColoredText = (text) => {
    let indexOfOpenSquare = 0;
    let indexofCloseSquare = 0;
    const stringArray = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] == "[") {
        indexOfOpenSquare = i;
        stringArray.push({
          string: text.slice(indexofCloseSquare, i),
          colored: false,
        });
      }
      if (text[i] == "]") {
        indexofCloseSquare = i + 1;
        stringArray.push({
          string: text.slice(indexOfOpenSquare + 1, i),
          colored: true,
        });
      }
      if (text.length - 1 == i && text[i] !== "[" && text[i] !== "]") {
        stringArray.push({
          string: text.slice(indexofCloseSquare, i + 1),
          colored: false,
        });
      }
    }
    return stringArray;
  };

  const changeSlide = () => {
    if (currentIndex == onboardDetails.length - 1) {
      router.push("/auth/signup");
    } else {
      setCurrentIndex((prev) => prev + 1);
      slideRef.current.scrollToIndex({ index: currentIndex + 1 });
    }
  };



  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: theme == "light" ? COLORS.light : DARKMODECOLORS.dark, position: "relative" }}
    >
      <StatusBar
        barStyle={ theme == "light" ? "dark-content" : "light-content"}
        backgroundColor={theme == "light" ? COLORS.light : DARKMODECOLORS.dark}
      />
      <ScrollView
        keyboardShouldPersistTaps="always"
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.container, styles[theme].container]}>
         
            <FlatList
              data={onboardDetails}
              keyExtractor={(item) => item.title}
              horizontal
              pagingEnabled
              bounces={false}
              showsHorizontalScrollIndicator={false}
              onScroll={
                Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: false }
                )
              }
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slideRef}

              renderItem={({ item }) => {
                return (
                  <View style={[{ width: width - 32 }]}>
                    <Text style={[styles.slideTitleText, styles[theme].slideTitleText]}>
                      {getColoredText(item.title).map((text, i) => {
                        return (
                          <Text
                            key={i}
                            style={
                              text.colored
                                ? styles.slideTitleColored
                                : [styles.slideTitle, styles[theme].slideTitle]
                            }
                          >
                            {text.string}
                          </Text>
                        );
                      })}
                    </Text>

                    {/* Onboard Image */}
                    <View style={[styles.imageContainer]}>
                      <Image
                        source={item.image}
                        resizeMode="contain"
                        style={[styles.onboardImage]}
                      />
                    </View>

                    {/* Onboard Description */}
                    <Text style={[styles.slideDescription, styles[theme].slideDescription]}>
                      {item.description}
                    </Text>
                  </View>
                );
              }}
            />

          {/* Onboard Pagination */}
          <View style={styles.barsWrapper}>
            {onboardDetails.map((detail, i) => {
              const inputRange = [
                (i - 1) * width,
                i * width,
                (i + 1) * width,
              ]
              const dotWidth =scrollX.interpolate(
                {
                  inputRange,
                  outputRange: [20, 40, 20],
                  extrapolate: "clamp"
                }
              )
              const opacity = scrollX.interpolate(
                {
                  inputRange,
                  outputRange: [0.3, 1, 0.3],
                  extrapolate: "clamp"
                }
              )
              return (
                <Animated.View
                  key={detail.title}
                  style={styles.bar(dotWidth, opacity)}
                />
              );
            })}
          </View>

          {/* Onboard Buttons */}
          <View style={styles.onboardButtons}>
            <Button
              type={theme == "dark" ? "white-action-btn" : "course-cancel-btn"}
              text={
                currentIndex == onboardDetails.length - 1
                  ? "Next"
                  : "Continue..."
              }
              onPress={changeSlide}
            />
            <Pressable onPress={() => router.push("/auth/signup")}>
              <Text style={styles.skipText}>
                {currentIndex == onboardDetails.length - 1 ? "" : "Skip"}
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OnboardScreen;

{
  /* Onboard Title */
}
