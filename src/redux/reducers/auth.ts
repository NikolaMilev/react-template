import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { loginSuccess, loginError } from '../actions/auth';
import { User } from '../../types/User';

export type AuthReducerState = {
    user: User | null;
    loginError: string | null;
};

export const INITIAL_AUTH_REDUCER_STATE: AuthReducerState = {
    user: null,
    loginError: null
};

const AuthReducer = createReducer(INITIAL_AUTH_REDUCER_STATE, (builder) =>
    builder
        .addCase(loginSuccess, (state: AuthReducerState, action: PayloadAction<User>) => {
            return {
                ...state,
                user: action.payload,
                loginError: null
            };
        })
        .addCase(loginError, (state: AuthReducerState, action: PayloadAction<string>) => {
            return {
                ...state,
                loginError: action.payload
            };
        })
);

export default AuthReducer;
