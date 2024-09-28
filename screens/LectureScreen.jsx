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
} from "react-native";
import { Skeleton } from "moti/skeleton";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState, useRef, useContext, useMemo } from "react";
import { LectureChatContext } from "../context/lectureChatContext";
import { useDispatch } from "react-redux";
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

import styles from "../styles/screens/lectures.style";
import chatStyles from "../styles/screens/chat.style";
import { COLORS, SIZES, images } from "../constants";

import { activeCourseActions } from "../redux/slices/activeCourseSlice";

import lectureIdeaContent from "../constants/lectureContent";

const LectureScreen = ({ courseId, topicId, lectureId }) => {
  const { width } = Dimensions.get("window");
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const scrollViewRef = useRef(null);
  const { messages, addMessage } = useContext(LectureChatContext);
  const [ideaContent, setIdeaContent] = useState([]);
  const [currentIdeaIndex, setCurrentIdeaIndex] = useState(1);
  const [lecture, setLecture] = useState([]);
  const [progress, setProgress] = useState(0);
  const [showVideoLecture, setShowVideoLecture] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [isOnQuiz, setIsOnQuiz] = useState(false);
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const socket = useMemo(() => io("http://192.168.179.93:4000"), []);
  const [text, setText] = useState("");
  const [voiceNote, setVoiceNote] = useState("");
  const [loadingSimestaChat, setLoadingSimestaChat] = useState(false);

  const sendText = () => {
    Keyboard.dismiss();
    if (text.length > 0) {
      addMessage({
        id: Math.round(Math.random() * 1000000),
        message: text,
        sender: "user",
      });
      setText("");
      socket.emit("chat message", text);
      setLoadingSimestaChat(true);
    }
  };

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
    setLoadingSimestaChat(true);
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
    setLecture([...lectureIdeaContent.slice(0, currentIdeaIndex)]);
    setProgress((lecture.length / lectureIdeaContent.length) * 100);
    setCurrentIdeaIndex((prev) => prev + 1);
  }, []);

  const handleShowVideo = () => {
    // setShowVideoLecture((prev) => !prev);
  };
  const markAsComplete = () => {
    setProgress(100);
    setCompleted(true);
  };

  const nextContent = () => {
    setLecture([...lectureIdeaContent.slice(0, currentIdeaIndex)]);
    setProgress((lecture.length / lectureIdeaContent.length) * 100);
    setCurrentIdeaIndex((prev) => prev + 1);
  };

  const getLecture = async () => {
    const res = await fetch(
      `http://192.168.179.93:3000/course/topic/lecture/${lectureId}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await res.json();
    console.log(data.videos);
    if (res.status == 200) {
      setLecture({
        ...lecture,
        lectureText: data.lectureText,
        videos: data.videos,
      });
      dispatch(activeCourseActions.setActiveLectureContent(lecture));
    }
  };

  const handleShowBottomSheet = () => {
    setShowBottomSheet((prev) => !prev);
  };

  // useEffect(() => {
  //   getLecture();
  // }, []);
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
            <Text style={styles.headerText}>Intro to Quantum Mechanics</Text>
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
                      ideaText={item.ideaText}
                      image={item.image}
                      mcq={item.mcq}
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
              ) : lectureIdeaContent.length !== lecture.length ? (
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
              <VideoScreen
                handleClose={handleShowVideo}
                videoLink={lecture.videos[0]}
              />
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
        </SafeAreaView>
      </KeyboardAvoidingView>
    </GestureHandlerRootView>
  );
};

export default LectureScreen;
