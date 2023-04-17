import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./containers/Navigation";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navigation />
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
