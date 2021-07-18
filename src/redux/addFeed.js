import { createSlice } from "@reduxjs/toolkit";
import { functionsApi } from "../api/firebase";

export const initialState = {
  enabled: false,
  domain: "",
  html: "",
  showHtml: false,
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
    setDomain(state, action) {
      state.domain = action.payload;
    },
    setHtml(state, action) {
      state.html = action.payload;
      state.showHtml = true;
    },
    removeHtml(state) {
      state.html = "action.payload";
      state.showHtml = false;
    },
  },
});

export const { enableAddFeed, disableAddFeed, setDomain, setHtml, removeHtml } =
  addFeed.actions;

export default addFeed.reducer;

const getDomain = (url) => {
  const regex = /^(?:https?:\/\/)?(?:[^@/\n]+@)?(?:www.)?([^:/?\n]+)/gi;
  return url.match(regex)[0];
};

const formatUrl = (url) => {
  let newUrl = url.toLowerCase();
  if (newUrl.startsWith("www.")) {
    newUrl = "https://" + url;
  } else if (!newUrl.startsWith("http")) {
    newUrl = "https://www." + url;
  }
  return newUrl;
};

const getHtml = functionsApi.httpsCallable("getHTML");

export const fetchWebsite = (url) => async (dispatch) => {
  const newUrl = formatUrl(url);
  const domain = getDomain(newUrl);
  dispatch(setDomain(domain));

  try {
    const result = await getHtml({ link: url });
    dispatch(setHtml(result.data.htmlBody));
  } catch (error) {
    return error;
  }
};
