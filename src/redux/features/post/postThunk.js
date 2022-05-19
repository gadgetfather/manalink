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
// buggy in backend might delete later kept for reference
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

export const deletePost = createAsyncThunk(
  "api/deletePost",
  async (postId, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;
    console.log("deletePOst", encodedToken);
    try {
      const response = await axios.delete(
        `/api/posts/${postId}`,

        {
          headers: { authorization: encodedToken },
        }
      );
      console.log("RESPONSE", response);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const editPost = createAsyncThunk(
  "api/editPost",
  async (data, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;
    const postData = data.postData;
    try {
      const response = await axios.post(
        ` /api/posts/edit/${data.postId}`,
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

export const addToBookmarks = createAsyncThunk(
  "post/addToBookmarks",
  async (postId, { rejectWithValue, getState }) => {
    try {
      const response = await axios.post(
        `/api/users/bookmark/${postId}`,
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

export const removeFromBookmarks = createAsyncThunk(
  "post/removeFromBookmarks",
  async (postId, { rejectWithValue, getState }) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${postId}`,
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
// Delete later no need of this buggy getSinglePost
// export const getSinglePost = createAsyncThunk(
//   "post/getSinglePost",
//   async (postId, { rejectWithValue, getState }) => {
//     try {
//       const response = await axios.get(`/api/posts/${postId}`);
//       console.log(response);
//       return response.data;
//     } catch (error) {
//       console.log(error);
//       return rejectWithValue(error.response.data);
//     }
//   }
// );

export const addComment = createAsyncThunk(
  "post/addComment",
  async (data, { rejectWithValue, getState }) => {
    const commentData = data.comment;
    try {
      const response = await axios.post(
        `/api/comments/add/${data.postId}`,
        { commentData },
        {
          headers: { authorization: getState().auth.token },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const getComments = createAsyncThunk(
  "post/getComments",
  async (postId, { rejectWithValue, getState }) => {
    try {
      const response = await axios.get(`/api/comments/${postId}`);
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const upvoteComment = createAsyncThunk(
  "post/upvoteComment",
  async (data, { rejectWithValue, getState }) => {
    try {
      const response = await axios.post(
        `/api/comments/upvote/${data.postId}/${data.commentId}`,
        {},
        {
          headers: { authorization: getState().auth.token },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const downvoteComment = createAsyncThunk(
  "post/downvoteComment",
  async (data, { rejectWithValue, getState }) => {
    try {
      const response = await axios.post(
        `/api/comments/downvote/${data.postId}/${data.commentId}`,
        {},
        {
          headers: { authorization: getState().auth.token },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);

export const editComment = createAsyncThunk(
  "api/editComment",
  async (data, { rejectWithValue, getState }) => {
    const commentData = data.commentData;
    try {
      const response = await axios.post(
        `/api/comments/edit/${data.postId}/${data.commentId}`,
        { commentData },
        {
          headers: { authorization: getState().auth.token },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
export const deleteComment = createAsyncThunk(
  "api/deleteComment",
  async (data, { rejectWithValue, getState }) => {
    try {
      const response = await axios.post(
        `/api/comments/delete/${data.postId}/${data.commentId}`,
        {},
        {
          headers: { authorization: getState().auth.token },
        }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.response.data);
    }
  }
);
