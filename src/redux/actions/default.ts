import { createAction } from '@reduxjs/toolkit';
import { AppDispatch } from '..';

// An action type
export const DEFAULT_REDUCER_SET_CONTENT = 'DEFAULT_REDUCER_SET_CONTENT';

// An sync action; export if needed
const setContent = createAction<string>(DEFAULT_REDUCER_SET_CONTENT);

// An async action
export const setContentAsync = (content: string) => (dispatch: AppDispatch) => {
    setTimeout(() => {
        dispatch(setContent(content));
    }, 1000);
};

// Export types
export type DefaultActionsType = typeof setContent | typeof setContentAsync;

// Export actions
export default {
    setContentAsync,
    setContent
};
