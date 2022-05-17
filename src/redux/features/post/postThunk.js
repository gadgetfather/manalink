import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "post/getPost",
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.get("api/posts");
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const createPost = createAsyncThunk(
  "api/createPost",
  async (postData, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;
    try {
      const response = await axios.post(
        "/api/posts",
        { postData },
        {
          headers: { authorization: encodedToken },
        }
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getUserPost = createAsyncThunk(
  "post/userpost",
  async (userName, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/posts/user/${userName}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const likePost = createAsyncThunk(
  "post/like",
  async (postId, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;

    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: { authorization: encodedToken },
        }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const dislikePost = createAsyncThunk(
  "post/dislike",
  async (postId, { rejectWithValue, getState }) => {
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: { authorization: getState().auth.token },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
