"use client";

import { createSlice } from "@reduxjs/toolkit";

type AppSliceTypes = {
  name: string;
  initialState: [];
};

const initialState = {
  name: "Victor Ezekiel",
};

export const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;

export default appSlice.reducer;
