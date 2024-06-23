import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false },
    reducers: {
        login(state){
            state.isLoggedIn = true;
        },
        signup(state){
            state.isLoggedIn = true;
        },
        logout(state){
            state.isLoggedIn = false;
            localStorage.clear()
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;