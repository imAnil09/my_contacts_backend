// Reducers/ContactsList.js
import { createReducer } from "@reduxjs/toolkit";

const initialState = [];

export const ContactsList = createReducer(initialState, (builder) => {
  builder
    .addCase('contactsList', (state, action) => {
      return action.payload;
    })
    // Add other cases if needed
    .addDefaultCase((state) => {
      return state;
    });
});
