import { createAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';
import ApiManager from '../../api/ApiManager';
import { User } from '../../types/User';
import { Response } from '../../types/NetworkTypes';
import Endpoints from '../../api/Endpoints';

// Action types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

// Sync actions
export const loginSuccess = createAction<User>(LOGIN_SUCCESS);
export const loginError = createAction<string>(LOGIN_ERROR);

// An async action
export const emailLogin = (email: string, password: string) => (dispatch: AppDispatch) => {
    ApiManager.getInstance()
        .request<User>('post', Endpoints.authenticate.email, { email, password })
        .then((response: Response<User>) => {
            dispatch(loginSuccess(response.data));
        })
        .catch(() => {
            dispatch(loginError('There was an error logging in!'));
        });
};

// Export types
export type AuthActionsType = typeof loginSuccess | typeof loginError | typeof emailLogin;
