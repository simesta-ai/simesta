import {
  Text,
  ScrollView,
  View,
  Image,
  TouchableOpacity,
  Pressable,
  Dimensions,
  Keyboard,
  StatusBar,
} from "react-native";
import { Skeleton } from "moti/skeleton";
import { useState, useEffect, useRef, useMemo, useContext } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { ChatMessageContext } from "../context/chatMessageContext";
import ChatInput from "../components/ChatInput";
import { io } from "socket.io-client";
import { COLORS, SIZES, images } from "../constants";
import styles from "../styles/screens/chat.style";
import AntDesign from '@expo/vector-icons/AntDesign';


const LearningMethodChatScreen = () => {
  const { width } = Dimensions.get("window");
  const user = useSelector((state) => state.user);
  const router = useRouter()
  const scrollViewRef = useRef(null);
  const { messages, addMessage } = useContext(ChatMessageContext);
  const socket = useMemo(() => io("http://192.168.232.93:3000"), []);
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

  const goToHome = () => {
    router.push('/home')
  }

  useEffect(() => {
    scrollViewRef.current.scrollToEnd({ animated: true });
  }, [messages]);

  useEffect(() => {
    setLoadingSimestaChat(true);
    if (voiceNote.length > 0) {
      setText(voiceNote);
    }
  }, [voiceNote]);

  useEffect(() => {
    socket.emit('start prediction', user.name)
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
  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: COLORS.light, position: "relative" }}
    >
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.backgroundGrey}
      />

      <View style={styles.container}>
        <Pressable onPress={goToHome} style={styles.cancelBtn}>
        <AntDesign name="close" size={24} color="black" />
        </Pressable>
        <Text style={styles.chatHeaderText}>How do you learn?</Text>
        <Text style={styles.chatDescription}>
          This session is AI-powered and would help us understand who you are
          and how it influences how you learn.
        </Text>

        {/* Chat Body */}
        <ScrollView
          ref={scrollViewRef}
          keyboardShouldPersistTaps="always"
          showsVerticalScrollIndicator={false}
        >
          {messages.map((message) => {
            if (message.sender === "simesta") {
              return (
                <View style={styles.simestaChat} key={message.id}>
                  <Image
                    source={images.colouredLogo2D}
                    style={styles.simestaChatImage}
                  />
                  
                  <Text style={styles.chatMessage}>{message.message}</Text>
                </View>
              );
            } else {
              return (
                <View style={styles.userChat} key={message.id}>
                  <View style={styles.userChatMessage}>
                    <Text style={styles.chatMessage}>{message.message}</Text>
                  </View>
                </View>
              );
            }
          })}
          {loadingSimestaChat ? (
            <View style={styles.chatLoaderContainer}>
              <Image
                source={images.colouredLogo2D}
                style={styles.simestaChatImageLoading}
              />
              <View>
                <Skeleton
                  width={width - 100}
                  height={15}
                  radius={10}
                  colorMode="light"
                />
              </View>
            </View>
          ) : null}
        </ScrollView>
        <ChatInput
          text={text}
          handleSubmitText={sendText}
          handleTextChange={(text) => setText(text)}
          setVoiceNote={setVoiceNote}
        />
      </View>
    </SafeAreaView>
  );
};

export default LearningMethodChatScreen;
