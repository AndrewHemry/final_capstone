import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigation from "./containers/Navigation";
import Router from "./Router";
import { Provider } from "react-redux";

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';

// import store from "./redux/store";

// import { PersistGate } from "redux-persist/integration/react";
// import { store, persistor } from "./redux/configureStore";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navigation />
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
