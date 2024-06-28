import { createSlice } from "@reduxjs/toolkit";

const activeCourseSlice = createSlice({
    name: 'activeCourse',
    initialState: {
        id: "",
        title: "",
        description: "",
        image: "",
        progress: "",
        topics: []
    },
    reducers: {
        setActiveCourse(state, action){
            const course = action.payload
            state.id = course.id;
            state.title = course.title
        }
    }
})

export const activeCourseActions = activeCourseSlice.actions;

export default activeCourseSlice.reducer;