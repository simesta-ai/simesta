import { createSlice } from "@reduxjs/toolkit";

const courseCreationSlice = createSlice({
    name: 'courseCreationDetails',
    initialState: {
        title: "",
        topics: [],
        files: [],
    },
    reducers: {
        saveTitle(state, action){
            const title = action.payload
            state.title = title;
        },
        addTopic(state, action){
            const topic = action.payload
            state.topics.push(topic);
        },
        addFiles(state, action){
            const files = action.payload;
            state.files = state.files.concat(files);
        },
        removeFile(state, action){
            const index = action.payload;
            state.files = state.files.filter((file) => file.id !== index)
        },
        deleteTopic(state, action){
            const index = action.payload;
            state.topics = state.topics.filter((topic) => topic.id !== index);
        }
    }
});

export const courseCreationActions = courseCreationSlice.actions;

export default courseCreationSlice.reducer;