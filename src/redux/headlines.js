import { createSlice } from "@reduxjs/toolkit";
import Api from "../api/api-client";

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

export const getHeadlines = () => async (dispatch) => {
  let date = new Date().getDate();
  let month = new Date().getMonth() + 1;
  let year = new Date().getFullYear();

  // const result = await Api.getHeadlines(date, month, year);
  const result = await Api.getHeadlines(15, 7, 2021);
  if (result?.data?.headline?.length) {
    dispatch(setHeadlines(result.data.headline));
  } else dispatch(setHeadlines([]));
};
