import {
  ScrollView,
  View,
  Text,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  Pressable,
  Dimensions,
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
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ChatInput from "../components/ChatInput";
import { io } from "socket.io-client";
import LectureProgressBar from "../components/dashboard/LectureProgressBar";
import IdeaContent from "../containers/lecture/IdeaContent";
import BottomSheet from "../containers/BottomSheet";
import { Audio } from "expo-av";

import styles from "../styles/screens/lectures.style";
import chatStyles from "../styles/screens/chat.style";
import LottieView from "lottie-react-native";
import { COLORS, SIZES, images } from "../constants";
import { LinearGradient } from "expo-linear-gradient";
import { activeCourseActions } from "../redux/slices/activeCourseSlice";

import lectureIdeaContent from "../constants/lectureContent";

const LectureScreen = ({ courseId, topicId, lectureId }) => {
  const { width, height } = Dimensions.get("window");
  const dispatch = useDispatch();
  const activeCourse = useSelector((state) => state.course);
  const scrollRef = useRef(null);
  const scrollViewRef = useRef(null);
  const [loadingLecture, setLoadingLecture] = useState(false);
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
  const socket = useMemo(() => io("http://192.168.77.93:3000"), []);
  const [text, setText] = useState("");
  const [voiceNote, setVoiceNote] = useState("");
  const [sound, setSound] = useState();
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

  async function playSound() {
    setSimestaSpeaking(true);
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/whatstheweatherlike.wav") // Replace with your audio file path
    );
    setSound(sound);
    sound.setOnPlaybackStatusUpdate((status) => {
      const duration = status.durationMillis
      if(!duration){
        setTimeout(() => {
          setSimestaSpeaking(false)
        }, 3000)
      }
      setTimeout(() => {
        setSimestaSpeaking(false)
      }, duration)
    });
    await sound.playAsync();
  }


  useEffect(() => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  }, [messages]);

  // useEffect(() => {
  //   scrollRef.current?.scrollTo({
  //     y: currentIdeaIndex * 500,
  //     animated: true,
  //   });
  // }, [lecture]);

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
      `http://192.168.77.93:3000/courses/${activeCourse.id}/topic/lecture/${lectureId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    if (
      data.message == "Lecture not found" ||
      data.message == "Lecture videos do not exist"
    ) {
      setLoadingLecture(true);
      const newRes = await fetch(
        `http://192.168.77.93:3000/courses/${activeCourse.id}/topic/lecture/${lectureId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      const newData = await newRes.json();
      setIdeaContent(newData.ideaContent);
      setVideos(newData.videos);
      setLoadingLecture(false);
    } else {
      setIdeaContent(data.ideaContent);
      setVideos(data.videos);
      setLoadingLecture(false);
    }

    // if (res.status == 200) {
    //   setLecture({
    //     ...lecture,
    //     lectureText: data.lectureText,
    //     videos: data.videos,
    //   });
    //   dispatch(activeCourseActions.setActiveLectureContent(lecture));
    // }
  };

  const handleShowBottomSheet = () => {
    setShowBottomSheet((prev) => !prev);
  };

  useEffect(() => {
    setLoadingLecture(true);
    getLecture();
  }, []);

  if (loadingLecture) {
    return (
      <View
        style={{
          padding: 100,
        }}
      >
        <ActivityIndicator size={40} color={"black"} />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light }}>
          <View style={styles.lectureHeaderCon}>
            {/* path={`course/${courseId}/topic/${topicId}`} */}
            <BackButtonContainer />
            <Text style={styles.headerText}>
              {activeCourse.activeLectureTitle}
            </Text>
            <LectureProgressBar value={progress} />
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
                      ideaText={item.text}
                      image={item.imageDescription}
                      mcq={item.quizzes}
                      oneChoiceQuestion={item.oneChoiceQuestion}
                      setIsOnQuiz={setIsOnQuiz}
                      scrollRef={scrollRef}
                    />
                  )}
                  contentContainerStyle={{ rowGap: SIZES.small }}
                />
              </View>

              <Text style={styles.lectureContentText}>
                {lecture.lectureText}
              </Text>
              {completed ? (
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
              ) : isOnQuiz ? null : (
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
              <View style={styles.chatContainer}>
                <Text style={chatStyles.chatDescription}>
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

                            <Text style={chatStyles.chatMessage}>
                              {message.message}
                            </Text>
                          </View>
                        );
                      } else {
                        return (
                          <View style={chatStyles.userChat} key={message.id}>
                            <View style={chatStyles.userChatMessage}>
                              <Text style={chatStyles.chatMessage}>
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
                            colorMode="light"
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
                // Find more Lottie files at https://lottiefiles.com/featured
                source={require("../lottie/speaking.json")}
                speed={1}
              />
              <Text style={styles.speakingText}>Simesta AI is speaking</Text>
            </View>
          ) : null}
          {!simestaSpeaking ? (
            <View style={styles.hangingButtonSpeak}>
              <RoundAccentButton
                icon={
                  <Ionicons
                    name="headset"
                    size={SIZES.large}
                    color={COLORS.light}
                  />
                }
                type="round-accent-btn-big"
                handlePress={playSound}
              />
            </View>
          ) : null}
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default LectureScreen;
