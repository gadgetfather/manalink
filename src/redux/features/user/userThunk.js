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
export const follow = createAsyncThunk(
  "user/follow",
  async (data, thunkAPI) => {
    const encodedToken = thunkAPI.getState().auth.token;
    try {
      const response = await axios.post(
        `/api/users/follow/${data.followUserId}`,
        {},
        { headers: { authorization: encodedToken } }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
);
