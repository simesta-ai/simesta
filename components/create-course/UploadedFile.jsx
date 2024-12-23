import { Pressable, Text, View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { courseCreationActions } from "../../redux/slices/courseCreationSlice";

import styles from "../../styles/screens/addCourse.style";
import { COLORS, SIZES, DARKMODECOLORS } from "../../constants";

const UploadedFile = ({ file, theme }) => {
  const dispatch = useDispatch();
  const removeFile = () => {
    dispatch(courseCreationActions.removeFile(file.id));
  };

  return (
    <View style={[styles.fileContainer, styles[theme].fileContainer]}>
      <View style={styles.fileName}>
        <AntDesign
          name={
            file.type == "jpeg"
              ? "jpgfile1"
              : file.type == "pdf"
              ? "pdffile1"
              : file.type == "msword"
              ? "wordfile1"
              : "file1"
          }
          size={SIZES.medium}
          color={
            theme == "light" ? COLORS.dark : DARKMODECOLORS.light
          }
        />
        <Text style={styles.titleText}>{file.name.slice(0, 35) + "..."}</Text>
      </View>

      <Pressable onPress={removeFile} style={styles.deleteFileBtn}>
        <FontAwesome6 name="xmark" size={SIZES.regular} color={COLORS.light} />
      </Pressable>
    </View>
  );
};

export default UploadedFile;
