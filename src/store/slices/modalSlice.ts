import { createSlice } from "@reduxjs/toolkit";
import type { ImageData } from "../../types/schema";

interface ModalState {
  isOpen: boolean;
  response: ImageData;
}

const initialState: ModalState = {
  isOpen: false,
  response: {} as ImageData,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal(state) {
      state.isOpen = false;
    },

    openModal(state, action) {
      state.isOpen = true;
      state.response = action.payload;
    },

    addComment(state, action) {
      const msgComent = action.payload;
      const idComment = state.response.comments.length + 1;
      const newComent = {
        id: idComment,
        author: "Вы",
        text: msgComent,
      };
      state.response.comments.push(newComent);
    },
  },
});

export const { closeModal, openModal, addComment } = modalSlice.actions;

export default modalSlice.reducer;
