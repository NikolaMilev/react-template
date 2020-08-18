import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import AuthActions from '../actions/auth';

export type AuthReducerState = {
    token: string | null;
};

export const INITIAL_AUTH_REDUCER_STATE: AuthReducerState = {
    token: null
};

const AuthReducer = createReducer(INITIAL_AUTH_REDUCER_STATE, (builder) =>
    builder.addCase(AuthActions.setToken, (state: AuthReducerState, action: PayloadAction<string>) => {
        return {
            ...state,
            content: action.payload
        } as AuthReducerState;
    })
);

export default AuthReducer;
