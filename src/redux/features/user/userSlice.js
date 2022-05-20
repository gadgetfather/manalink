import { toastError } from "../../../components/Toast/Toast";
import { getAllUsers, getSingleUser } from "./userThunk";

const { createSlice } = require("@reduxjs/toolkit");
const initialState = {
  users: [],
  visitingUser: {},
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.users = action.payload.users;
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      })
      .addCase(getSingleUser.fulfilled, (state, action) => {
        state.visitingUser = action.payload.user;
      })
      .addCase(getSingleUser.rejected, (state, action) => {
        toastError(action.payload.errors[0]);
      });
  },
});

export default userSlice.reducer;
