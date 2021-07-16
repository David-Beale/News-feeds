import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  addFeed: false,
};
const addFeed = createSlice({
  name: "addFeed",
  initialState,
  reducers: {
    enableAddFeed(state) {
      state.addFeed = true;
    },
    disableAddFeed(state) {
      state.addFeed = false;
    },
  },
});

export const { enableAddFeed, disableAddFeed } = addFeed.actions;

export default addFeed.reducer;
