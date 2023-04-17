import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web and AsyncStorage for react-native

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['current_company', 'user'] // only persist the current_company state object
};

const rootReducer = combineReducers({
    current_company: companyReducer,
    user: userReducer
});
  
const persistedReducer = persistReducer(persistConfig, rootReducer);
  
export default persistedReducer;