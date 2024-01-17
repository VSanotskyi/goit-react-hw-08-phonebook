import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

const FindContactForm = ({ handleFilter }) => {
  const handleChange = ({ target: { value } }) => {
    handleFilter(value);
  };

  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Find contact
        </InputLabel>
        <Input onChange={handleChange}
               id="input-with-icon-adornment"
               startAdornment={
                 <InputAdornment position="start">
                   <SearchIcon />
                 </InputAdornment>
               }
        />
      </FormControl>
    </Box>
  );
};
export { FindContactForm };
