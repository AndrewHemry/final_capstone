import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { Map } from 'immutable';
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'current_company'],
  transforms: [
    {
      // Use Immutable.js to create immutable state
      transformer: (state) => Map(state),
    },
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
