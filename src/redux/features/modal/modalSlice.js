import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isOpen: false,
  editCommentModal: false,
  editCommentText: "",
  editCommentId: "",
  editPostId: "",
  editPostText: "",
  editPostModal: false,
  editProfile: false,
  editProfileText: "",
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
    openEditCommentModal: (state, action) => {
      state.editCommentModal = true;
      state.editCommentText = action.payload.text;
      state.editCommentId = action.payload._id;

      document.body.style.overflow = "hidden";
    },
    closeEditCommentModal: (state, action) => {
      state.editCommentModal = false;
      document.body.style.overflow = "unset";
      state.editCommentText = "";
      state.editCommentId = "";
    },
    openEditPostModal: (state, action) => {
      state.editPostModal = true;
      document.body.style.overflow = "hidden";
      state.editPostId = action.payload.postId;
      state.editPostText = action.payload.text;
    },
    closeEditPostModal: (state, action) => {
      state.editPostModal = false;
      document.body.style.overflow = "unset";
      state.editCommentText = "";
      state.editCommentId = "";
    },
    openEditProfileModal: (state, action) => {
      state.editProfile = true;
      document.body.style.overflow = "hidden";
      state.editProfileText = action.payload;
    },
    closeEditProfileModal: (state, action) => {
      state.editProfile = false;
      document.body.style.overflow = "unset";
      state.editProfileText = "";
    },
  },
});
export const {
  openModal,
  closeModal,
  openEditCommentModal,
  closeEditCommentModal,
  openEditPostModal,
  closeEditPostModal,
  closeEditProfileModal,
  openEditProfileModal,
} = modalSlice.actions;
export default modalSlice.reducer;
