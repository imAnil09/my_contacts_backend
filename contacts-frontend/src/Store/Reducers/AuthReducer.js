// AuthReducer.js

import { createReducer } from "@reduxjs/toolkit";

const initialState = '';

export const AuthReducer = createReducer(initialState, (builder) => {
  builder
    .addCase('accessToken', (state, action) => {
      return action.payload;
    })
    // Add other cases if needed
    .addDefaultCase((state) => {
      return state;
    });
});
