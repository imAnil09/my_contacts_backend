// Reducers/ContactsList.js
import { createReducer } from "@reduxjs/toolkit";

const initialState = [];

export const ContactsList = createReducer(initialState, {
  contactsList: (state, action) => {
    return action.payload;
  },
});
