import axios from 'axios';

export const getAllContactsApi = async () => await axios.get('/contacts');

export const addContactApi = async (data) => await axios.post('/contacts',
  data);

export const delContactApi = async (contactId) => await axios.delete(
  `/contacts/${contactId}`);
