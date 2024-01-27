// Reducers/ContactsList.js
import { createReducer } from "@reduxjs/toolkit";

const initialState = [];

export const ContactsList = createReducer(initialState, (builder) => {
  builder
    .addCase('contactsList', (state, action) => {
      return action.payload;
    })
    .addCase('resetContactsList', (state, action) => {
      return initialState;
    })
    .addDefaultCase((state) => {
      return state;
    });
});
