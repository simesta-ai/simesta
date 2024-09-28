import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: "",
        name : "",
        accessToken: "",
        isFirstUser: true
    },
    reducers: {
        register(state, action){
            const user = action.payload
            state.id = user.id;
            state.name= user.name;
            state.accessToken = user.accessToken;
            state.isFirstUser = false;
        },
        login(state, action){
            const user = action.payload
            state.id = user.id;
            state.name= user.name;
            state.accessToken = user.accessToken;
        },
        logout(state){
            state.id = "";
            state.name= "";
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;