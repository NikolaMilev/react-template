import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import DefaultActions from '../actions/default';

export type DefaultReducerState = {
    content: string;
};

export const INITIAL_DEFAULT_REDUCER_STATE: DefaultReducerState = {
    content: 'an initial value'
};

const DefaultReducer = createReducer(INITIAL_DEFAULT_REDUCER_STATE, (builder) =>
    builder.addCase(DefaultActions.setContent, (state: DefaultReducerState, action: PayloadAction<string>) => {
        return {
            ...state,
            content: action.payload
        };
    })
);

export default DefaultReducer;
