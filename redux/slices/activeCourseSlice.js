import { createSlice } from "@reduxjs/toolkit";

const activeCourseSlice = createSlice({
  name: "activeCourse",
  initialState: {
    id: "",
    title: "",
    description: "",
    image: "",
    progress: "",
    topics: [],
    activeTopicId: "",
    activeLectureId: "",
    activeLectureContent: {
      lectureText: "",
      videos: [""],
    },
  },
  reducers: {
    setActiveCourse(state, action) {
      const course = action.payload;
      state.id = course.id;
      state.title = course.title;
    },
    setActiveCourseData(state, action) {
      const dataToUpdate = action.payload;
      state = { ...state, dataToUpdate };
    },
    setActiveTopic(state, action) {
      const activeTopicId = action.payload;
      state.activeTopicId = activeTopicId;
    },
    setActiveLecture(state, action) {
      const activeLectureId = action.payload;
      state.activeLectureId = activeLectureId;
    },
    setActiveLectureContent(state, action) {
      const lectureContent = action.payload;
      state.activeLectureContent = {
        ...state.activeLectureContent,
        lectureContent,
      };
    },
  },
});

export const activeCourseActions = activeCourseSlice.actions;

export default activeCourseSlice.reducer;
