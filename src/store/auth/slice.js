import { createSlice } from '@reduxjs/toolkit';

import {
  currentThunk,
  loginThunk,
  logoutThunk,
  regThunk,
} from './operations';

const handlePending = (state) => {
  state.error = null;
};

const handleAuthOnFulfilled = (state, { payload }) => {
  if (payload.user) state.user = payload.user;
  if (!payload.user) state.user = payload;
  if (payload.token) state.token = payload.token;
  state.isLog = true;
};

const handleAuthOffFulfilled = (state) => {
  state.user = null;
  state.token = null;
  state.isLog = false;
};

const handleRejected = (state, { payload }) => {
  state.token = null;
  state.user = null;
  state.isLog = false;
  state.error = payload;
};

const initialState = {
  user: null,
  token: null,
  isLog: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // pending
      .addCase(regThunk.pending, handlePending)
      .addCase(loginThunk.pending, handlePending)
      .addCase(logoutThunk.pending, handlePending)
      .addCase(currentThunk.pending, handlePending)
      // fulfilled
      .addCase(regThunk.fulfilled, handleAuthOnFulfilled)
      .addCase(loginThunk.fulfilled, handleAuthOnFulfilled)
      .addCase(logoutThunk.fulfilled, handleAuthOffFulfilled)
      .addCase(currentThunk.fulfilled, handleAuthOnFulfilled)
      // rejected
      .addCase(regThunk.rejected, handleRejected)
      .addCase(loginThunk.rejected, handleRejected)
      .addCase(logoutThunk.rejected, handleRejected)
      .addCase(currentThunk.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;
