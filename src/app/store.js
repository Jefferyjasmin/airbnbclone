import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../features/button.Slice";

export const store = configureStore({
  reducer: {
    button: buttonReducer,
  },
});
