import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App";
import Styling from "./styling/Styling";
import "./index.css";
import store from "./redux/store";
import AuthLayer from "./components/AuthLayer/AuthLayer";

ReactDOM.render(
  <Styling>
    <Provider store={store}>
      <AuthLayer>
        <App />
      </AuthLayer>
    </Provider>
  </Styling>,
  document.getElementById("root")
);
