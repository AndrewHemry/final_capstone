// import { createStore } from "redux";
// import reducers from "./reducers";
// import state from "./state";

// export default createStore(reducers, state)

import { createStore } from 'redux';
import { persistStore } from 'redux-persist';
import persistedReducer from './reducers';

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };