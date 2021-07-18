import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  headlines: [],
};
const headlines = createSlice({
  name: "headlines",
  initialState,
  reducers: {
    setHeadlines(state, action) {
      state.headlines = action.payload;
    },
  },
});

export const { setHeadlines } = headlines.actions;

export default headlines.reducer;
