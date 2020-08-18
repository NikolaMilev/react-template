import { combineReducers } from '@reduxjs/toolkit';

// Import reducers
import DefaultReducer from './default';
import AuthReducer from './auth';

// Combine reducers
const rootReducer = combineReducers({
    // Your reducers here
    DefaultReducer,
    AuthReducer
});

// Export
export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
