import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  delContactThunk,
  getAllContactsThunk,
} from './operations';

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,

  reducers: {
    setFilterAction: (state, { payload }) => {
      state.filter = payload;
    },
  },

  extraReducers: builder => {
    builder
      // Pending
      .addCase(getAllContactsThunk.pending, handlePending)
      .addCase(addContactThunk.pending, handlePending)
      .addCase(delContactThunk.pending, handlePending)
      // FulFilled
      .addCase(getAllContactsThunk.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          state.items = payload;
        })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(delContactThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.items.findIndex(el => el.id === payload.id);

        state.items.splice(index, 1);
      })
      // Rejected
      .addCase(getAllContactsThunk.rejected, handleRejected)
      .addCase(addContactThunk.rejected, handleRejected)
      .addCase(delContactThunk.rejected, handleRejected);
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { setFilterAction } = contactsSlice.actions;
