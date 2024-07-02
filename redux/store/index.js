import { configureStore } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { combineReducers } from "redux";
import userReducer from "../slices/userSlice";
import authReducer from "../slices/authSlice";
import activeCourseReducer from "../slices/activeCourseSlice";
import coursesReducer from "../slices/coursesSlice"

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, userReducer);
const rootReducer = combineReducers({
  user: persistedReducer,
  auth: authReducer,
  course: activeCourseReducer,
  allcourses: coursesReducer
});



export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
