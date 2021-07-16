import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  enabled: false,
};
const addFeed = createSlice({
  name: "addFeed",
  initialState,
  reducers: {
    enableAddFeed(state) {
      state.enabled = true;
    },
    disableAddFeed(state) {
      state.enabled = false;
    },
  },
});

export const { enableAddFeed, disableAddFeed } = addFeed.actions;

export default addFeed.reducer;
