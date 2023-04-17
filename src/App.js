import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navigation from "./containers/Navigation";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  // const [currentCompany, setCurrentCompany] = useState(null);

  return (
    <Provider store={store}>
        <BrowserRouter>
          <Navigation />
          <Router />
          {/* <Navigation currentCompany={currentCompany}/> */}
          {/* <Router setCurrentCompany={setCurrentCompany}/> */}
        </BrowserRouter>
    </Provider>
  );
}

export default App;
