import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toastError } from "../../../components/Toast/Toast";
const initialState = {
  user: JSON.parse(localStorage.getItem("manalink.user")) || "",
  token: localStorage.getItem("manalink.token") || "",
  isSuccess: "",
};

export const userLogin = createAsyncThunk(
  "auth/login",
  async (logindata, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: logindata.username,
        password: logindata.password,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const userSignup = createAsyncThunk(
  "auth/signup",
  async (signupData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        username: signupData.username,
        password: signupData.password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLogout: (state, action) => {
      state.user = "";
      state.token = "";
      localStorage.removeItem("manalink.user");
      localStorage.removeItem("manalink.token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.fulfilled, (state, action) => {
        toastError("working");

        state.user = action.payload.foundUser;
        state.token = action.payload.encodedToken;
        localStorage.setItem("manalink.token", action.payload.encodedToken);
        localStorage.setItem(
          "manalink.user",
          JSON.stringify(action.payload.foundUser)
        );
      })
      .addCase(userLogin.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(userSignup.fulfilled, (state, action) => {
        state.token = action.payload.encodedToken;
        state.user = action.payload.createdUser;
        localStorage.setItem("manalink.token", action.payload.encodedToken);
        localStorage.setItem(
          "manalink.user",
          JSON.stringify(action.payload.createdUser)
        );
      })
      .addCase(userSignup.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      });
  },
});
export const { userLogout } = authSlice.actions;
export default authSlice.reducer;
