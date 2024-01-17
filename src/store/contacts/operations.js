import { createAsyncThunk } from '@reduxjs/toolkit';

import {
  addContactApi,
  delContactApi,
  getAllContactsApi,
} from 'services/contacts';

export const getAllContactsThunk = createAsyncThunk(
  'contacts/get',
  async (_, thunkAPI) => {
    try {
      const res = await getAllContactsApi();
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const addContactThunk = createAsyncThunk(
  'contacts/add',
  async (data, thunkAPI) => {
    try {
      const res = await addContactApi(data);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const delContactThunk = createAsyncThunk(
  'contacts/del',
  async (contactId, thunkAPI) => {
    try {
      const res = await delContactApi(contactId);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
