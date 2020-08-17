import { combineReducers } from "@reduxjs/toolkit";

// Import reducers
import DefaultReducer from "./default";

// Combine reducers
const rootReducer = combineReducers({
  // Your reducers here
  DefaultReducer,
});

// Export
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
