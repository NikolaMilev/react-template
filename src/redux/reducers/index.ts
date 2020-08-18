import { combineReducers } from '@reduxjs/toolkit';

// Import reducers
import AuthReducer from './auth';

// Combine reducers
const rootReducer = combineReducers({
    // Your reducers here
    AuthReducer
});

// Export
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
