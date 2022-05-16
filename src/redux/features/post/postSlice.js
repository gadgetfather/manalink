import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toastError } from "../../../components/Toast/Toast";
const initialState = {
  posts: [],
  loading: false,
  userPost: [],
};
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
      });
  },
});

export default postSlice.reducer;
