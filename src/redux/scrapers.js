import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { dbApi } from "../api/firebase";

const scrapersAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date - a.date,
});

export const initialState = scrapersAdapter.getInitialState({
  loading: true,
  editFeeds: false,
});

const scrapers = createSlice({
  name: "scrapers",
  initialState,
  reducers: {
    addScraper(state, action) {
      scrapersAdapter.upsertOne(state, action.payload);
    },
    setLoaded(state) {
      state.loading = false;
    },
    deleteOne(state, action) {
      scrapersAdapter.removeOne(state, action.payload);
    },
    enableEditFeed(state) {
      state.editFeeds = true;
    },
    disabledEditFeed(state) {
      state.editFeeds = false;
    },
  },
});

export const {
  addScraper,
  setLoaded,
  deleteOne,
  enableEditFeed,
  disabledEditFeed,
} = scrapers.actions;

export const { selectAll: selectAllScrapers } = scrapersAdapter.getSelectors(
  (state) => state.scrapers
);

export default scrapers.reducer;

export const subscribeToScrapers = () => async (dispatch, getState) => {
  const user = getState().auth.user;
  dbApi
    .collection("scrapers")
    .where("user", "==", user)
    .orderBy("name", "desc")
    .onSnapshot((querySnapshot) => {
      if (!querySnapshot.size) {
        dispatch(setLoaded());
        return;
      }
      querySnapshot.forEach((doc) => {
        dispatch(addScraper({ id: doc.id, ...doc.data() }));
      });
      dispatch(setLoaded());
    });
};

export const deleteScraper = (id) => async (dispatch) => {
  dbApi.collection("scrapers").doc(id).delete();
  dispatch(deleteOne(id));
};
