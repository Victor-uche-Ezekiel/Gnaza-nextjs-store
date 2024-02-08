import { configureStore } from "@reduxjs/toolkit";
import appSliceReducer from "./features/appSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    appSlice: appSliceReducer,
    modal: modalReducer,
  },
});
