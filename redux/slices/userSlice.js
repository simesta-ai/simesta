import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        id: "",
        name : "",
    },
    reducers: {
        register(state, action){
            const user = action.payload
            state.id = user.id;
            state.name= user.name;
        },
        login(state, action){
            const user = action.payload
            state.id = user.id;
            state.name= user.name;
        },
        logout(state){
            state.id = "";
            state.name= "";
        }
    }
});

export const userActions = userSlice.actions;

export default userSlice.reducer;