import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import Styling from "./styling/Styling";
import "./index.css";

import { AuthProvider } from "./components/AuthLayer/useAuth";

ReactDOM.render(
  <Styling>
    <AuthProvider>
      <App />
    </AuthProvider>
  </Styling>,
  document.getElementById("root")
);
