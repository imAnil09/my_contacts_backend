import { createReducer } from "@reduxjs/toolkit";

const initialState = ''
export const AuthReducer = createReducer(initialState, {
    accessToken: (state, action) => {
        return action.payload;
    }
})