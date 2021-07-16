import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  enabled: false,
  domain: "",
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
  },
});

export const { enableAddFeed, disableAddFeed, setDomain } = addFeed.actions;

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

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchWebsite = (url) => async (dispatch) => {
  const newUrl = formatUrl(url);
  const domain = getDomain(newUrl);
  dispatch(setDomain(domain));
  await timeout(2000);
  // return "error";
  // const {error, res} =await Api.getWebsite(newUrl).then((result) => {
  //   setWebsite(result.data.html.htmlBody);
  // });

  // return error
};
