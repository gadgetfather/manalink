import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import modalReducer from "./features/modal/modalSlice";
import postReducer from "./features/post/postSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    modal: modalReducer,
    post: postReducer,
  },
});
