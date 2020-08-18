import { createAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';

export const SET_TOKEN = 'SET_TOKEN';

// An sync action; export if needed
const setToken = createAction<string>(SET_TOKEN);

// An async action
export const apiLogin = () => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(setToken('a token'));
    }, 1000);
};

// Export types
export type AuthActionsType = typeof setToken | typeof apiLogin;

// Export actions
export default {
    apiLogin,
    setToken
};
