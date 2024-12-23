import { PermissionsAndroid, Pressable, Text, View } from "react-native";
import { useState, useContext } from "react";
import * as DocumentPicker from "expo-document-picker";
import * as ImagePicker from "expo-image-picker"
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ThemeContext } from "../../context/ThemeContext";
import { courseCreationActions } from "../../redux/slices/courseCreationSlice";
import courseCreationSlice from "../../redux/slices/courseCreationSlice";
import Button from "../Button";
import IconTextButton from "../IconTextButton";

import styles from "../../styles/screens/addCourse.style";
import { COLORS, SIZES } from "../../constants";
import Toast from "react-native-toast-message";

const FileUploadBox = () => {
  const dispatch = useDispatch();
  const { theme } = useContext(ThemeContext)
  const files = useSelector((state) => state.courseCreationDetails.files);
  
  const handleUpload = async () => {
    try {
      const documents = await DocumentPicker.getDocumentAsync({
        type: [
          "image/jpeg",
          "image/png",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          "application/pdf",
        ],
        multiple: true,
        copyToCacheDirectory: true,
      });
      const pickedFiles = [];
      documents.assets.forEach((file) => {
        if (file.size <= 20971520) {
          const courseDocument = {
            id: Math.floor(Math.random() * 1000),
            name: file.name,
            uri: file.uri,
            mimeType: file.mimeType,
            type: file.mimeType.split("/")[1],
            size: file.size,
          };
          pickedFiles.push(courseDocument);
        } else {
          Toast.show({
            type: "error",
            text1: "Max size exceeded",
            text2: `${file.name.split(0, 20)}... is too large.`,
          });
        }
      });
      dispatch(courseCreationActions.addFiles(pickedFiles));
    } catch (error) {
      console.log(error);
    }
  };
  const handleSnap = async () => {
    try {
      await ImagePicker.requestCameraPermissionsAsync();
      let snapShot = await ImagePicker.launchCameraAsync({
        cameraType: ImagePicker.CameraType.back,
        allowsEditing: true,
        aspect: [1,1],
        quality: 1,
      });
      if (!snapShot.canceled) {
        const photoFile = [];
      snapShot.assets.forEach((file) => {
        if (file.fileSize <= 20971520) {
          const courseSnap = {
            id: Math.floor(Math.random() * 1000),
            name: `Snapshot_${file.fileName.slice(0, 6)}`,
            uri: file.uri,
            mimeType: file.mimeType,
            type: file.mimeType.split("/")[1],
            size: file.fileSize,
          };
          photoFile.push(courseSnap);

        } else {
          Toast.show({
            type: "error",
            text1: "Max size exceeded",
            text2: `${file.fileName.split(0, 20)}... is too large.`,
          });
        }
      });
      dispatch(courseCreationActions.addFiles(photoFile));
      } else {
        console.log('cancelled')
      }
    } catch (error) {
      
    }
  }
  return (
    <View style={[styles.uploadContainer, styles[theme].uploadContainer]}>
      <Text style={[styles.label, styles[theme].label]}>Upload additional course files</Text>
      <FontAwesome6 name="file-text" size={40} color={COLORS.lightGrey} />
      <View style={styles.fileUploadInstruction}>
        <Text style={styles.subText}>
          Allowed file types: PDF, DOCX, PNG, JPG
        </Text>
        <Text style={styles.subText}>Maximum allowed file size is 20MB</Text>
      </View>
      <View style={styles.uploadButtonContainer}>
        <Button
          text="Upload file(s)"
          type={"upload-file-btn"}
          onPress={handleUpload}
        />
        <IconTextButton
          icon={
            <FontAwesome6 name="camera" size={13} color={COLORS.light} />
          }
          text="Snapshot"
          type={"black-btn-small"}
          handlePress={handleSnap}
        />
      </View>
    </View>
  );
};

export default FileUploadBox;
