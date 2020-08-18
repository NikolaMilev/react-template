import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './reducers';

const middleware = [thunk, logger];

// Setup persist
const persistConfig = {
    key: 'root',
    whitelist: ['AuthReducer'],
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware
});

const persistor = persistStore(store);

// For resetting the persisted store
// persistor.purge();

export type AppDispatch = typeof store.dispatch;
export { store, persistor };
