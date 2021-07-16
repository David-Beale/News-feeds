import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../api/firebase";

export const initialState = {
  user: null,
  isAuth: false,
};
const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    authorise(state) {
      state.isAuth = true;
    },
    deauthorise(state) {
      state.isAuth = false;
    },
  },
});

export const { setUser, authorise, deauthorise } = auth.actions;

export default auth.reducer;

export const signUp = (username, password) => async () => {
  return authApi.createUserWithEmailAndPassword(username, password);
};
export const signIn = (username, password) => async () => {
  return authApi.signInWithEmailAndPassword(username, password);
};
export const signOut = () => async () => {
  return authApi.signOut();
};
export const forgotPassword = (email) => async () => {
  return authApi.sendPasswordResetEmail(email);
};
export const confirmNewPassword = (code, password) => async () => {
  return authApi.confirmPasswordReset(code, password);
};
