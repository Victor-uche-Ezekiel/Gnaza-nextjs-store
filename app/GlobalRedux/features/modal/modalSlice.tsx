"use client";
import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

type Initial = {
  isOpen: boolean;
  rings: null | string;
};

const initialState: Initial = {
  isOpen: false,
  rings: null,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    sortByRings: (state) => {
      if (state.rings === null) {
        state.rings = "rings";
      } else {
        state.rings = null;
      }
    },
  },
});

export const { openModal, closeModal, sortByRings } = modalSlice.actions;

export default modalSlice.reducer;
