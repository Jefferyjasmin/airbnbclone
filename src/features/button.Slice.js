import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "button",
  initialState: {
    button: false,
  },

  reducers: {
    clicked: (state) => {
      state.button = !state.button;
    },
  },
});
export const { clicked } = buttonSlice.actions;
export const selectbutton = (state) => state.button.button;

export default buttonSlice.reducer;
