import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import addFeed from "./addFeed";

export default configureStore({
  reducer: {
    auth,
    addFeed,
  },
});
