import { createSlice } from "@reduxjs/toolkit";
import { getHtml, dbApi } from "../api/firebase";

export const initialState = {
  menu: null,
  showHtml: false,
  domain: "",
  html: "",
  previewData: {},
  selectors: {},
  status: 1,
  finished: false,
};

const addFeed = createSlice({
  name: "addFeed",
  initialState,
  reducers: {
    enableAddFeed(state) {
      state.menu = "start";
    },
    closeMenu(state) {
      state.options = [];
      state.menu = null;
    },
    setDomain(state, action) {
      state.domain = action.payload;
    },
    setUrl(state, action) {
      state.selectors = { ...state.selectors, url: action.payload };
    },
    setName(state, action) {
      state.previewData = { ...state.previewData, name: action.payload };
      state.selectors = { ...state.selectors, name: action.payload };
    },
    setHtml(state, action) {
      state.html = action.payload;
      state.showHtml = true;
    },
    reset(state) {
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
    setStatus(state, action) {
      state.status = action.payload;
    },
    prevStatus(state) {
      state.status -= 1;
    },
    enabledPreview(state) {
      state.menu = "preview";
    },
    setFinished(state) {
      state.finished = true;
    },
  },
});

export const {
  enableAddFeed,
  closeMenu,
  setDomain,
  setUrl,
  setName,
  setHtml,
  reset,
  setPreviewData,
  setSelectors,
  setOptions,
  setStatus,
  prevStatus,
  enabledPreview,
  setFinished,
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

export const fetchWebsite = (url, name) => async (dispatch) => {
  const newUrl = formatUrl(url);
  const domain = getDomain(newUrl);
  dispatch(setUrl(newUrl));
  dispatch(setDomain(domain));
  dispatch(setName(name));

  try {
    const result = await getHtml({ link: url });
    if (result.data.error) {
      return result.data.error;
    }
    dispatch(setHtml(result.data.htmlBody));
  } catch (error) {
    return error;
  }
};

export const selectOption = (option) => async (dispatch) => {
  dispatch(setPreviewData({ [option.type]: option.data }));
  dispatch(setSelectors({ [option.type]: option.path }));
  dispatch(closeMenu());
  dispatch(nextStatus());
};
export const nextStatus = () => async (dispatch, getState) => {
  const currentStatus = getState().addFeed.status;
  if (currentStatus < 4) dispatch(setStatus(currentStatus + 1));
  else dispatch(enabledPreview());
};

export const submitNewScrape = () => async (dispatch, getState) => {
  const user = getState().auth.user;
  const selectors = getState().addFeed.selectors;
  try {
    await dbApi.collection("scrapers").add({ ...selectors, user });
  } catch (error) {
    console.log(error);
    return error;
  }
  dispatch(setFinished());
};

export const onClose = () => async (dispatch, getState) => {
  const finished = getState().addFeed.finished;
  if (finished) dispatch(reset());
  else dispatch(closeMenu());
};
