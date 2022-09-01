import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import { ModalProvider } from "./context/Modal";
import DisplayProblemsProvider from "./context/DisplayProblems";
import configureStore from "./store";

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ModalProvider>
        <DisplayProblemsProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </DisplayProblemsProvider>
      </ModalProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
