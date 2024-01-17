import Button from '@mui/material/Button';
import css from './ContactItem.module.css';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const ContactItem = ({ item, handleDelContacts }) => {
  const handleClick = () => {
    handleDelContacts(item.id);
  };

  return (
    <li>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container
              spacing={3}
        >
          <Grid item
                xs
          >
            <Item>{item.name}</Item>
          </Grid>
          <Grid item
                xs={6}
          >
            <Item>{item.number}</Item>
          </Grid>
          <Grid item
                xs
          >
            <Button variant="contained"
                    onClick={handleClick}
            >Delete</Button>
          </Grid>
        </Grid>
      </Box>
    </li>
    // <div className={css.wrapper}>
    //   <p className={css.text}>{item.name}</p>
    //   <p className={css.text}>{item.number}</p>
    //   <Button variant="contained"
    //           onClick={handleClick}
    //   >Delete</Button>
    // </div>
  );
};

export { ContactItem };
