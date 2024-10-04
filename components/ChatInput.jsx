import {
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
  StyleSheet,
} from "react-native";
import { Audio } from "expo-av";

import { useState, useEffect } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { MotiView } from "moti";
import { FadeInDown } from "react-native-reanimated";
import RoundAccentButton from "./RoundAccentButton";
import styles from "../styles/screens/chat.style";
import { COLORS, SIZES } from "../constants";
import { Easing } from "react-native-reanimated";

const ChatInput = ({
  handleSubmitText,
  text,
  handleTextChange,
  setVoiceNote,
}) => {
  const [micOn, setMicOn] = useState(false);
  const [recording, setRecording] = useState();
  const [transcribingAudio, setTranscribingAudio] = useState(false);
  const [permissionResponse, requestPermission] = Audio.usePermissions();

  const toggleMicVisibility = () => {
    if (recording && micOn) {
      stopRecording();
    } else {
      setMicOn((prev) => !prev);
      startRecording();
    }

    Keyboard.dismiss();
  };

  // set micOn to false when the keyboard is active
  const handleKeyboardVisibility = () => {
    setMicOn(false);
  };

  async function startRecording() {
    try {
      if (permissionResponse.status !== "granted") {
        await requestPermission();
      }
      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(recording);
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    setRecording(undefined);
    setTranscribingAudio(true);
    await recording.stopAndUnloadAsync();
    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
    });
    const uri = recording.getURI();
    const response = await fetch(uri);
    const blob = await response.blob();
    const formData = new FormData();
    formData.append("audio", {
      uri: uri,
      name: "audio",
      type: "audio/mp4",
    });
    try {
      const res = await fetch("https://truelearn-production.up.railway.app/chat/speech-to-text", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      const text = await res.json();
      if (res.ok && text.data) {
        setVoiceNote(text.data);
      } else {
        console.log("Error", text);
      }
    } catch (error) {
      console.error("Network or server error", error);
    }

    setTranscribingAudio(false);
    setMicOn((prev) => !prev);
  }

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", handleKeyboardVisibility);
    return () => {
      Keyboard.removeAllListeners("keyboardDidShow", handleKeyboardVisibility);
    };
  }, [micOn]);

  return (
    <View>
      <View style={styles.chatAndVoiceContainer}>
        <View style={styles.chatInputContainer}>
          <TextInput
            placeholder="Enter Reply..."
            style={styles.chatInput}
            selectionColor={COLORS.dark}
            value={text}
            onChangeText={handleTextChange}
          />
          {!micOn ? (
            <View style={styles.sendButtonContainer}>
              <Pressable
                onPress={toggleMicVisibility}
                style={styles.inputMicButton}
              >
                <Ionicons
                  name="mic"
                  size={SIZES.medium}
                  color={COLORS.miniDarkGrey}
                />
              </Pressable>
            </View>
          ) : null}
        </View>
        <View style={styles.sendButtonContainer}>
          <RoundAccentButton
            icon={
              <Ionicons name="send" size={SIZES.medium} color={COLORS.light} />
            }
            type="round-accent-btn"
            handlePress={handleSubmitText}
          />
        </View>
      </View>
      {micOn ? (
        <View style={styles.voiceContainer}>
          <MotiView
            from={{ opacity: 0.5, scale: 1 }}
            animate={{ opacity: 1, scale: 2 }}
            transition={{
              type: "timing",
              duration: 1000,
              easing: Easing.out(Easing.ease),
              loop: true,
              repeatReverse: false,
            }}
            style={styles.soundIndicator}
          />
          <Text style={styles.voiceNoteText}>Listening..</Text>
          {!transcribingAudio ? (
            <View>
              <Pressable
                style={styles.voiceIconContainer}
                onPress={toggleMicVisibility}
              >
                <Text style={styles.stopRecordingText}>
                  Tap to stop recording
                </Text>
                <Ionicons
                  name="close"
                  size={SIZES.medium}
                  color={COLORS.darkGrey}
                />
              </Pressable>
            </View>
          ) : (
            <View style={styles.voiceIconContainer}>
              <Text style={styles.stopRecordingText}>Transcribing...</Text>
            </View>
          )}
        </View>
      ) : null}
    </View>
  );
};

export default ChatInput;
