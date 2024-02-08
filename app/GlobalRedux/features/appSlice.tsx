"use client";

import { createSlice } from "@reduxjs/toolkit";
import { useRef } from "react";

// type AppSliceTypes = {
//   name: string;
//   initialState: [];
// };

const initialState = {
  name: "Victor Ezekiel",
};

const newState = {
  new: "state",
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
