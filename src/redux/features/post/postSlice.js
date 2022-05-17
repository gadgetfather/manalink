import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toastError } from "../../../components/Toast/Toast";
import {
  getPosts,
  createPost,
  getUserPost,
  dislikePost,
  likePost,
  addToBookmarks,
  removeFromBookmarks,
} from "./postThunk";
const initialState = {
  posts: [],
  loading: false,
  userPost: [],
  bookmarks: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload.posts;
      })
      .addCase(getPosts.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(createPost.rejected, (state, action) => {
        console.log(action);
      })
      .addCase(getUserPost.fulfilled, (state, action) => {
        state.userPost = action.payload.posts;
      })
      .addCase(getUserPost.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(likePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(likePost.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(dislikePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(dislikePost.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(addToBookmarks.fulfilled, (state, action) => {
        console.log(action);
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(addToBookmarks.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(removeFromBookmarks.fulfilled, (state, action) => {
        state.bookmarks = action.payload.bookmarks;
      })
      .addCase(removeFromBookmarks.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      });
  },
});

export default postSlice.reducer;
