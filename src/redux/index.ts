import thunk from "redux-thunk";
import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./reducers";

const middleware = [thunk, logger];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;
export default store;
