import "./App.css";
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./containers/Navigation";
import Router from "./Router";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Provider store={store}>
        <BrowserRouter>
          <Navigation isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
          <Router isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        </BrowserRouter>
    </Provider>
  );
}

export default App;
