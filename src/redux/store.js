import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth";
import addFeed from "./addFeed";
import headlines from "./headlines";

export default configureStore({
  reducer: {
    auth,
    addFeed,
    headlines,
  },
});
