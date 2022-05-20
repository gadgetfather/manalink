import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllUsers = createAsyncThunk(
  "user/getAllUsers",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/users");

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const getSingleUser = createAsyncThunk(
  "user/getSingleUser",
  async (username, thunkAPI) => {
    try {
      const response = await axios.get(`/api/users/${username}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
export const follow = createAsyncThunk(
  "user/follow",
  async (followUserId, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;
    try {
      const response = await axios.post(
        `/api/users/follow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const unfollow = createAsyncThunk(
  "user/unfollow",
  async (followUserId, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;
    try {
      const response = await axios.post(
        `/api/users/unfollow/${followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const editProfile = createAsyncThunk(
  "user/editProfile",
  async (userData, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;

    try {
      const response = await axios.post(
        "/api/users/edit",
        { userData },
        { headers: { authorization: encodedToken } }
      );
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
