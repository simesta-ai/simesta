import { Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { courseCreationActions } from "../../redux/slices/courseCreationSlice";

import styles from "../../styles/screens/addCourse.style";
import { COLORS, SIZES } from "../../constants";

const UploadedFile = ({ file }) => {

  const dispatch = useDispatch()
  const [fileLogo, setFileLogo] = useState("")
  const removeFile = () => {
    dispatch(courseCreationActions.removeFile(file.id))
  }
  useEffect(() => {
    switch (file.type) {
      case "pdf":
        setFileLogo("pdffile1")
      case "jpeg":
        setFileLogo("jpgfile1")
      case "msword":
        setFileLogo("wordfile1")
    
      default:
        setFileLogo("file1")
        break;
    }
  }, [file.type])
  
  return (
    <View style={styles.fileContainer}>
      <View style={styles.fileName}>
        <AntDesign name={fileLogo} size={SIZES.medium} color={COLORS.dark} />
        <Text style={styles.titleText}>
          {file.name.slice(0, 35) + "..."}
        </Text>
      </View>

      <Pressable onPress={removeFile} style={styles.deleteFileBtn}>
        <FontAwesome6 name="xmark" size={SIZES.regular} color={COLORS.dark} />
      </Pressable>
    </View>
  );
};

export default UploadedFile;
