// src/reducers/loginSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
  name: 'login',
  initialState: {
    isLoggedIn: false,
    error: null,
  },
  reducers: {
    loginSuccess: state => {
      state.isLoggedIn = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailure } = loginSlice.actions;

export default loginSlice.reducer;
