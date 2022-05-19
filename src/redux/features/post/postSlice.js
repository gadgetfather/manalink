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
  addComment,
  getComments,
  upvoteComment,
  downvoteComment,
  editComment,
  deleteComment,
  deletePost,
  editPost,
} from "./postThunk";
const initialState = {
  posts: [],
  loading: false,
  userPost: [],
  bookmarks: [],
  singlePost: "",
  comments: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setSinglePost: (state, action) => {
      // console.log("action", action.payload[0]);
      state.singlePost = action.payload[0];
    },
  },
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
      })
      .addCase(addComment.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(addComment.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(getComments.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(getComments.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(upvoteComment.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(upvoteComment.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(downvoteComment.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(downvoteComment.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(editComment.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
      })
      .addCase(editComment.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(deleteComment.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
        toastError("Comment Has been deleted");
      })
      .addCase(deleteComment.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
        toastError("Your post has been deleted");
      })
      .addCase(deletePost.rejected, (state, action) => {
        toastError(action.payload.message);
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.posts = action.payload.posts;
      })
      .addCase(editPost.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      });
  },
});
export const { setSinglePost } = postSlice.actions;
export default postSlice.reducer;
