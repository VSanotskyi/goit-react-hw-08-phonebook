import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = state => state.contacts.items;
export const selectVisibleContacts = createSelector(
  state => state.contacts.items,
  state => state.contacts.filter,
  (items, filter) => {
    return items.filter(contact => contact.name.toLowerCase()
      .includes(filter.toLowerCase()));
  },
);

export const selectFilter = state => state.contacts.filter;
export const selectItems = state => state.contacts.items;
