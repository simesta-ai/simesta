import { createSlice } from "@reduxjs/toolkit";
import { fetchCourseDetails } from "../../hooks/useFetchAsync";

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
    activeLectureTitle: "",
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
      state.description = dataToUpdate.description;
      state.image = dataToUpdate.image;
      state.progress = dataToUpdate.progress;
      state.topics = dataToUpdate.topics;
    },
    setActiveTopic(state, action) {
      const activeTopicId = action.payload;
      state.activeTopicId = activeTopicId;
    },
    setActiveLecture(state, action) {
      const activeLectureId = action.payload;
      state.activeLectureId = activeLectureId;
    },
    setActiveLectureTitle(state, action){
      const activeLectureTitle = action.payload;
      state.activeLectureTitle = activeLectureTitle
    },
    setActiveLectureContent(state, action) {
      const lectureContent = action.payload;
      state.activeLectureContent = {
        ...state.activeLectureContent,
        lectureContent,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCourseDetails.fulfilled, (state, action) => {
      const data = action.payload;
      state.description = data.description;
      state.image = data.image;
      state.progress = data.progress;
      state.topics = data.topics;
    });
  
  }
});

export const activeCourseActions = activeCourseSlice.actions;

export default activeCourseSlice.reducer;
