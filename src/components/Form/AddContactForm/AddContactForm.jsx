import { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Alert } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';

import { selectAllContacts } from 'store/contacts';

const checkContact = (contacts, contact) => {
  return contacts.find(
    el => el.name.toLowerCase() === contact.name.toLowerCase());
};

const initState = {
  name: '',
  number: '',
};

const AddContactForm = ({ handleAddContact }) => {
  const [contact, setContact] = useState(initState);
  const [isContact, setIsContact] = useState(false);
  const contacts = useSelector(selectAllContacts);

  const handleChange = ({ target: { value, name } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkContact(contacts, contact)) {
      setIsContact(true);

      setTimeout(() => {
        setIsContact(false);
      }, 2000);
      return;
    }

    handleAddContact(contact);
    setContact(initState);
  };

  return (
    <>
      {isContact && <Alert severity="error">Error</Alert>}
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            required
            type="name"
            value={contact.name}
            name="name"
            size="small"
            id="demo-helper-text-misaligned"
            label="Name"
            onChange={handleChange}
          />
          <TextField
            required
            type="tel"
            value={contact.number}
            name="number"
            size="small"
            id="demo-helper-text-misaligned-no-helper"
            label="Tel number"
            onChange={handleChange}
          />
          <Button type="submit"
                  variant="contained"
          ><PersonAddIcon /></Button>
        </Box>
      </form>
    </>
  );
};

export { AddContactForm };
