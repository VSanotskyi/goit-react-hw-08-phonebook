import { useState } from 'react';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

const initState = {
  name: '',
  number: '',
};

const AddContactForm = ({ handleAddContact }) => {
  const [contact, setContact] = useState(initState);

  const handleChange = ({ target: { value, name } }) => {
    setContact(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    handleAddContact(contact);
    setContact(initState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          '& > :not(style)': { m: 1 },
        }}
      >
        <TextField
          type="name"
          value={contact.name}
          name="name"
          size="small"
          id="demo-helper-text-misaligned"
          label="Name"
          onChange={handleChange}
        />
        <TextField
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
        >Add contact</Button>
      </Box>
    </form>
  );
};


export { AddContactForm };
