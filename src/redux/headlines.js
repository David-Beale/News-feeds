import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";

const headlinesAdapter = createEntityAdapter();

export const initialState = headlinesAdapter.getInitialState({
  loading: true,
});

const headlines = createSlice({
  name: "headlines",
  initialState,
  reducers: {
    addHeadline(state, action) {
      state.loading = false;
      headlinesAdapter.upsertOne(state, action.payload);
    },
  },
});

export const { addHeadline, noHeadlines } = headlines.actions;

export const { selectAll: selectAllHeadlines } = headlinesAdapter.getSelectors(
  (state) => state.headlines
);

export default headlines.reducer;
