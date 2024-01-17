import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  loginApi,
  logoutApi,
  currentApi,
  regApi,
  setAuthHeader,
  resetAuthHeader,
} from 'services/contacts';

export const regThunk = createAsyncThunk(
  'auth/reg',
  async (data, thunkAPI) => {
    try {
      const res = await regApi(data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  'auth/login',
  async (data, thunkAPI) => {
    try {
      const res = await loginApi(data);
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await logoutApi();
      resetAuthHeader();
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const currentThunk = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistToken = state.auth.token;

    if (persistToken === 'null') {
      return thunkAPI.rejectWithValue('error');
    }

    try {
      setAuthHeader(persistToken);
      const res = await currentApi();
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
