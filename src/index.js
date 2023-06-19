import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Breakpoints } from "react-device-breakpoints";
import { Provider } from "react-redux";
import { store } from "./features/store/store";

const breakpoints = {
  isTablet: "(max-width: 767px)",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Breakpoints {...breakpoints}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Breakpoints>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
