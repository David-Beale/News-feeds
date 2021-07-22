import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { dbApi } from "../api/firebase";

let lastVisible;
let loading;
const headlinesAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date - a.date,
});

export const initialState = headlinesAdapter.getInitialState({
  loading: true,
  finished: false,
});

const headlines = createSlice({
  name: "headlines",
  initialState,
  reducers: {
    addHeadline(state, action) {
      headlinesAdapter.upsertOne(state, action.payload);
    },
    setFinished(state) {
      state.finished = true;
    },
    setLoaded(state) {
      state.loading = false;
    },
  },
});

export const { addHeadline, noHeadlines, setFinished, setLoaded } =
  headlines.actions;

export const { selectAll: selectAllHeadlines } = headlinesAdapter.getSelectors(
  (state) => state.headlines
);

export default headlines.reducer;

export const subscribeToHeadlines = () => async (dispatch, getState) => {
  const user = getState().auth.user;
  dbApi
    .collection("headlines")
    .where("user", "==", user)
    .orderBy("date", "desc")
    .limit(5)
    .onSnapshot((querySnapshot) => {
      if (!querySnapshot.size) {
        dispatch(setFinished());
        dispatch(setLoaded());
        return;
      }
      querySnapshot.forEach((doc) => {
        dispatch(addHeadline({ id: doc.id, ...doc.data() }));
      });
      if (!lastVisible) {
        lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      }
      dispatch(setLoaded());
    });
};

export const getNewHeadlines = () => async (dispatch, getState) => {
  if (loading || !lastVisible) return;
  loading = true;
  const user = getState().auth.user;
  dbApi
    .collection("headlines")
    .where("user", "==", user)
    .orderBy("date", "desc")
    .startAfter(lastVisible)
    .limit(5)
    .get()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        dispatch(addHeadline({ id: doc.id, ...doc.data() }));
      });
      lastVisible = querySnapshot.docs[querySnapshot.docs.length - 1];
      if (querySnapshot.size < 5) dispatch(setFinished());
      loading = false;
    })
    .catch((error) => {
      console.log("Error getting documents: ", error);
    });
};
