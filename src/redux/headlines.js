import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { dbApi } from "../api/firebase";

let lastVisible;
const headlinesAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date - a.date,
});

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

export const subscribeToHeadlines = () => async (dispatch, getState) => {
  const user = getState().auth.user;
  return dbApi
    .collection("userFeeds")
    .doc(user)
    .collection("headlines")
    .orderBy("date", "desc")
    .limit(5)
    .onSnapshot((querySnapshot) => {
      if (!querySnapshot.size) {
        dispatch(noHeadlines());
        return;
      }
      querySnapshot.forEach((doc) => {
        dispatch(addHeadline({ id: doc.id, ...doc.data() }));
      });
      if (!lastVisible) {
        lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      }
    });
};

export const getNewHeadlines = () => async (dispatch, getState) => {
  const state = getState();
  return dbApi
    .collection("userFeeds")
    .doc(state.auth.user)
    .collection("headlines")
    .orderBy("date", "desc")
    .startAfter(lastVisible)
    .limit(5)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dispatch(addHeadline({ id: doc.id, ...doc.data() }));
      });
      lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};
