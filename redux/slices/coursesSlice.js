import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
    name: 'courses',
    initialState: [],
    reducers: {
        setAvailableCourses(state, action){
            const courses = action.payload
            state = courses;
        }
    }
})

export const coursesActions = coursesSlice.actions;

export default coursesSlice.reducer;