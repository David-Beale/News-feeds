import { createSlice } from "@reduxjs/toolkit";
import { functionsApi } from "../api/firebase";

export const initialState = {
  menu: null,
  showHtml: false,
  domain: "",
  html: "",
  previewData: {},
  selectors: {},
  selectedNode: "",
  name: "",
  status: 1,
};

const addFeed = createSlice({
  name: "addFeed",
  initialState,
  reducers: {
    enableAddFeed(state) {
      state.menu = "start";
    },
    onCancel(state) {
      state.menu = null;
    },
    setDomain(state, action) {
      state.domain = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setHtml(state, action) {
      state.html = action.payload;
      state.showHtml = true;
    },
    removeHtml(state) {
      Object.keys(state).forEach((key) => (state[key] = initialState[key]));
    },
    setPreviewData(state, action) {
      state.previewData = { ...state.previewData, ...action.payload };
    },
    setSelectors(state, action) {
      state.selectors = { ...state.selectors, ...action.payload };
    },
    setOptions(state, action) {
      state.options = action.payload;
      state.menu = "options";
    },

    clearOptions(state) {
      state.options = [];
      state.menu = null;
    },
    setStatus(state, action) {
      state.status = action.payload;
    },
    prevStatus(state) {
      state.status -= 1;
    },
    enabledPreview(state) {
      state.menu = "preview";
    },
  },
});

export const {
  enableAddFeed,
  onCancel,
  setDomain,
  setName,
  setHtml,
  removeHtml,
  setPreviewData,
  setSelectors,
  setOptions,
  clearOptions,
  setStatus,
  prevStatus,
  enabledPreview,
} = addFeed.actions;

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

export const fetchWebsite = (url, name) => async (dispatch) => {
  const newUrl = formatUrl(url);
  const domain = getDomain(newUrl);
  dispatch(setDomain(domain));
  dispatch(setName(name));

  try {
    const result = await getHtml({ link: url });
    dispatch(setHtml(result.data.htmlBody));
  } catch (error) {
    return error;
  }
};

export const selectOption = (option) => async (dispatch) => {
  dispatch(setPreviewData({ [option.type]: option.data }));
  dispatch(setSelectors({ [option.type]: option.path }));
  dispatch(clearOptions());
  dispatch(nextStatus());
};
export const nextStatus = () => async (dispatch, getState) => {
  const currentStatus = getState().addFeed.status;
  if (currentStatus < 4) dispatch(setStatus(currentStatus + 1));
  else dispatch(enabledPreview());
};
