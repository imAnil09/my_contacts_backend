// AuthReducer.js
import { createReducer } from "@reduxjs/toolkit";

const initialState = '';

export const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('accessToken', (state, action) => {
      return action.payload;
    })
    // Add a case to handle resetting the state
    .addCase('resetAccessToken', (state, action) => {
      return initialState; // Reset to the initial state
    })
    .addDefaultCase((state) => {
      return state;
    });
});
