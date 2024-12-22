import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
  Dimensions,
  StatusBar,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Skeleton } from "moti/skeleton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState, useRef, useContext, useMemo } from "react";
import { LectureChatContext } from "../context/lectureChatContext";
import { useDispatch, useSelector } from "react-redux";
import BackButtonContainer from "../containers/BackButtonContainer";
import Button from "../components/Button";
import RoundAccentButton from "../components/RoundAccentButton";
import VideoScreen from "./VideoScreen";
import { FontAwesome6 } from "@expo/vector-icons";
import Entypo from "@expo/vector-icons/Entypo";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChatInput from "../components/ChatInput";
import { io } from "socket.io-client";
import LectureProgressBar from "../components/dashboard/LectureProgressBar";
import IdeaContent from "../containers/lecture/IdeaContent";
import BottomSheet from "../containers/BottomSheet";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

import styles from "../styles/screens/lectures.style";
import chatStyles from "../styles/screens/chat.style";
import LottieView from "lottie-react-native";
import { COLORS, DARKMODECOLORS, SIZES, images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { activeCourseActions } from "../redux/slices/activeCourseSlice";

import lectureIdeaContent from "../constants/lectureContent";
import { ThemeContext } from "../context/ThemeContext";

const LectureScreen = ({ courseId, topicId, lectureId }) => {
  const { width, height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext)
  const activeCourse = useSelector((state) => state.course);
  const user = useSelector((state) => state.user);
  const scrollRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [loadingLecture, setLoadingLecture] = useState(true);
  const { messages, addMessage } = useContext(LectureChatContext);
  const [ideaContent, setIdeaContent] = useState([]);
  const [videos, setVideos] = useState([]);
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(0);
  const [lecture, setLecture] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showVideoLecture, setShowVideoLecture] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isOnQuiz, setIsOnQuiz] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const socket = useMemo(() => io("https://simesta-server.onrender.com"), []);
  const [text, setText] = useState("");
  const [voiceNote, setVoiceNote] = useState("");
  const [sound, setSound] = useState(null);
  const [currentSoundFile, setCurrentSoundFile] = useState(null);
  const [loadingSimestaChat, setLoadingSimestaChat] = useState(false);
  const [simestaSpeaking, setSimestaSpeaking] = useState(false);

  const sendText = () => {
    Keyboard.dismiss();
    if (text.length > 0) {
      addMessage({
        id: Math.round(Math.random() * 1000000),
        message: text,
        sender: "user",
      });
      setText("");
      socket.emit("user lecture chat", text);
      setLoadingSimestaChat(true);
    }
  };

  async function playSound(soundFile) {
    setSimestaSpeaking(true);
    const { sound } = await Audio.Sound.createAsync({ uri: soundFile });
    setSound(sound);
    sound.setOnPlaybackStatusUpdate((status) => {
      const duration = status.durationMillis;
      if (!duration) {
        setTimeout(() => {
          setSimestaSpeaking(false);
        }, 3000);
      }
      setTimeout(() => {
        setSimestaSpeaking(false);
      }, duration);
    });
    await sound.playAsync();
  }

  const handlePlaySound = () => {
    if (simestaSpeaking) {
      sound.stopAsync();
      setSimestaSpeaking(false);
    } else {
      setSimestaSpeaking(true);
      playSound(currentSoundFile);
    }
  };

  const getIdeaContentAudio = async (text) => {
    const fileUrl = "https://simesta-server.onrender.com/api/chat/text-to-speech";
    const fileUri = FileSystem.documentDirectory + "currentaudio.wav";
    try {
      const response = await fetch(fileUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text: text,
          userId: user.id
        }),
      });
      console.log(response.status)
      if (response.ok) {
        const fileData = await response.blob();
        const reader = new FileReader();
        reader.onloadend = async () => {
          const base64Data = reader.result.split(",")[1];
          await FileSystem.writeAsStringAsync(fileUri, base64Data, {
            encoding: FileSystem.EncodingType.Base64,
          });
          setCurrentSoundFile(fileUri);
        };
        reader.readAsDataURL(fileData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const currentLectureText = lecture[lecture.length - 1]?.text;
    if (currentLectureText) {
      getIdeaContentAudio(currentLectureText);
    }
  }, [lecture]);

  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      y: currentIdeaIndex * 500,
      animated: true,
    });
  }, [lecture]);

  useEffect(() => {
    if (voiceNote.length > 0) {
      setText(voiceNote);
    }
  }, [voiceNote]);

  useEffect(() => {
    setVoiceNote("");
  }, []);

  useEffect(() => {
    socket.on("simesta message", (msg) => {
      addMessage({
        id: Math.round(Math.random() * 1000000),
        message: msg,
        sender: "simesta",
      });
      setLoadingSimestaChat(false);
    });
    return () => {
      socket.off("simesta message");
    };
  }, [socket]);

  useEffect(() => {
    setLecture([...ideaContent.slice(0, currentIdeaIndex)]);
    setProgress(0);
    setCurrentIdeaIndex((prev) => prev + 1);
  }, []);

  const handleShowVideo = () => {
    setShowVideoLecture((prev) => !prev);
  };
  const markAsComplete = () => {
    setProgress(100);
    setCompleted(true);
  };

  const nextContent = () => {
    setLecture([...ideaContent.slice(0, currentIdeaIndex)]);
    setProgress((lecture.length / ideaContent.length) * 100);
    setCurrentIdeaIndex((prev) => prev + 1);
  };

  const getLecture = async () => {
    const res = await fetch(
      `https://simesta-server.onrender.com/api/courses/${activeCourse.id}/topic/lecture/${lectureId}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.accessToken}`,
        },
      }
    );
    const data = await res.json();
    if (
      data.message == "Lecture not found" ||
      data.message == "Lecture videos do not exist"
    ) {
      setLoadingLecture(true);
      await fetch(
        `https://simesta-server.onrender.com/api/courses/${activeCourse.id}/topic/lecture/${lectureId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.accessToken}`,
          },
        }
      );
      if (response.status == 200) {
        const newRes = await fetch(
          `https://simesta-server.onrender.com/api/courses/${activeCourse.id}/topic/lecture/${lectureId}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${user.accessToken}`,
            },
          }
        );
        const newData = await newRes.json();
        setIdeaContent(newData.ideaContent);
        setVideos(newData.videos);
        setLoadingLecture(false);
      }
      setLoadingLecture(false);
    } else {
      setIdeaContent(data.ideaContent);
      setVideos(data.videos);
      setLoadingLecture(false);
    }
  };

  const handleShowBottomSheet = () => {
    setShowBottomSheet((prev) => !prev);
  };

  useEffect(() => {
    setLoadingLecture(true);
    getLecture();
  }, []);

  if (!lecture || loadingLecture || !ideaContent) {
    return (
      <View style={[styles.lectureLoader, styles[theme].lectureLoader]}>
        <LottieView
          autoPlay
          style={{
            width: 500,
            height: 500,
          }}
          source={require("../lottie/loadingLecture.json")}
          speed={1.5}
        />
        <Text style={[styles.lectureLoaderText, styles[theme].lectureLoaderText]}>Loading lecture...</Text>
      </View>
    );
  }
  //

  if (!loadingLecture && lecture.length == 0 && ideaContent.length !== 0) {
    return (
      <View style={[styles.startCourseContainer, styles[theme].startCourseContainer]}>
        <Image
          source={images.startLecture}
          resizeMode="contain"
          style={[styles.startLectureImage]}
        />
        <View style={styles.startButtonContainer}>
          <Button
            text={"Start lecture"}
            type={theme == "light" ? "course-cancel-btn" : "white-action-btn"}
            onPress={nextContent}
          />
        </View>
      </View>
    );
  } else {
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <SafeAreaView style={{
          flex: 1, backgroundColor:
            theme === "light" ? COLORS.light : DARKMODECOLORS.dark
        }}>
          <StatusBar barStyle=
            {theme === "light" ? "dark-content" : "light-content"}
            backgroundColor={
              theme === "light" ? COLORS.backgroundGrey : DARKMODECOLORS.dark
            } />
          <View style={styles.lectureHeaderCon}>
            {/* path={`course/${courseId}/topic/${topicId}`} */}
            <BackButtonContainer />
            <Text style={[styles.headerText, styles[theme].headerText]}>
              {activeCourse.activeLectureTitle}
            </Text>
            <LectureProgressBar theme={theme} value={progress} />
          </View>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="always"
            ref={scrollRef}
          >
            <View style={styles.container}>
              {/* Progress bar */}

              {/* Idea Contnts */}
              <View style={styles.ideaContentContainer}>
                <FlatList
                  data={lecture}
                  scrollEnabled={false}
                  vertical
                  showsHorizontalScrollIndicator={false}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <IdeaContent
                      theme={theme}
                      key={item.id}
                      ideaText={item.text}
                      image={item.image}
                      mcq={item.quiz}
                      oneChoiceQuestion={item.oneChoice}
                      setIsOnQuiz={setIsOnQuiz}
                      scrollRef={scrollRef}
                    />
                  )}
                  contentContainerStyle={{ rowGap: SIZES.small }}
                />
              </View>
              {ideaContent.length <= 0 ? null : completed ? (
                <View style={styles.markedContainer}>
                  <FontAwesome6
                    name="check"
                    size={SIZES.large}
                    color={COLORS.progress}
                  />
                  <Text style={styles.completedText}>Completed</Text>
                </View>
              ) : ideaContent.length !== lecture.length ? (
                isOnQuiz ? null : (
                  <Button
                    text={"Continue"}
                    type="course-cancel-btn"
                    onPress={nextContent}
                  />
                )
              ) : isOnQuiz &&
                ideaContent.length !== 0 &&
                lecture.length !== 0 ? null : (
                <Button
                  text={"Mark as completed"}
                  type="course-cancel-btn"
                  onPress={markAsComplete}
                />
              )}
            </View>
          </ScrollView>
          {showVideoLecture ? (
            <View style={styles.videoScreenContainer}>
              <Pressable style={styles.closeButton} onPress={handleShowVideo}>
                <MaterialCommunityIcons
                  name="close"
                  size={SIZES.xLarge}
                  color={COLORS.light}
                />
              </Pressable>
              <VideoScreen handleClose={handleShowVideo} videos={videos} />
            </View>
          ) : null}
          {!showVideoLecture ? (
            <View style={styles.hangingButton}>
              <RoundAccentButton
                icon={
                  <FontAwesome6
                    name="video"
                    size={SIZES.large}
                    color={COLORS.light}
                  />
                }
                type="round-accent-btn-big"
                handlePress={handleShowVideo}
              />
            </View>
          ) : null}
          <View style={styles.hangingButtonSnd}>
            <RoundAccentButton
              icon={
                <Ionicons
                  name="chatbox"
                  size={SIZES.large}
                  color={COLORS.light}
                />
              }
              type="round-accent-btn-big"
              handlePress={handleShowBottomSheet}
            />
          </View>
          {showBottomSheet ? (
            <BottomSheet handleShowBottomSheet={handleShowBottomSheet}>
              {/* Chat Section */}
              <View style={[styles.chatContainer, styles[theme].chatContainer]}>
                <Text style={[chatStyles.chatDescription, chatStyles[theme].chatDescription]}>
                  Feel free to ask Simesta AI any questions related to your
                  learning journey.
                </Text>
                <ScrollView
                  ref={scrollViewRef}
                  keyboardShouldPersistTaps="always"
                  showsVerticalScrollIndicator={false}
                >
                  <View style={styles.chatWrapper}>
                    {messages.map((message) => {
                      if (message.sender === "simesta") {
                        return (
                          <View style={chatStyles.simestaChat} key={message.id}>
                            <Image
                              source={images.colouredLogo2D}
                              style={chatStyles.simestaChatImage}
                            />

                            <Text style={[chatStyles.chatMessage, chatStyles[theme].chatMessage]}>
                              {message.message}
                            </Text>
                          </View>
                        );
                      } else {
                        return (
                          <View style={[chatStyles.userChat, chatStyles[theme].userChat]} key={message.id}>
                            <View style={[chatStyles.userChatMessage, chatStyles[theme].userChatMessage]}>
                              <Text style={[chatStyles.chatMessage, chatStyles[theme].chatMessage]}>
                                {message.message}
                              </Text>
                            </View>
                          </View>
                        );
                      }
                    })}
                    {loadingSimestaChat ? (
                      <View style={chatStyles.chatLoaderContainer}>
                        <Image
                          source={images.colouredLogo2D}
                          style={chatStyles.simestaChatImageLoading}
                        />
                        <View>
                          <Skeleton
                            width={width - 120}
                            height={15}
                            radius={10}
                            colorMode={
                              theme === "light" ? "light" : "dark"
                            }
                          />
                        </View>
                      </View>
                    ) : null}
                  </View>
                </ScrollView>
                <View style={styles.chatBox}>
                  <ChatInput
                    text={text}
                    handleSubmitText={sendText}
                    handleTextChange={(text) => setText(text)}
                    setVoiceNote={setVoiceNote}
                  />
                </View>
              </View>
            </BottomSheet>
          ) : null}
          {simestaSpeaking ? (
            <View style={styles.speakingContainer}>
              <LinearGradient
                colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0)"]}
                style={[styles.bottomView, { height: height * 0.25 }]}
                start={{ x: 0.5, y: 1 }}
                end={{ x: 0.5, y: 0 }}
              />
              <LottieView
                autoPlay
                style={{
                  width: 60,
                  height: 60,
                  position: "absolute",
                  top: -30,
                }}
                source={require("../lottie/speaking.json")}
                speed={1.5}
              />
              <Text style={styles.speakingText}>Simesta AI is speaking</Text>
            </View>
          ) : null}

          {currentSoundFile ? (
            <View style={styles.hangingButtonSpeak}>
              <RoundAccentButton
                icon={
                  <MaterialIcons
                    name={`${simestaSpeaking ? "voice-over-off" : "record-voice-over"
                      }`}
                    size={SIZES.large}
                    color={COLORS.light}
                  />
                }
                type="round-accent-btn-big"
                handlePress={handlePlaySound}
              />
            </View>
          ) : null}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default LectureScreen;
