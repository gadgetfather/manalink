import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
};
const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      document.body.style.overflow = "hidden";
    },
    closeModal: (state, action) => {
      state.isOpen = false;
      document.body.style.overflow = "unset";
    },
  },
});
export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;
