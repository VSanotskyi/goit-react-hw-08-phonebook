import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

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
              style={{ display: 'flex' }}
              spacing={3}
        >
          <Grid item
                xs={4}
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
            <Button variant="outlined"
                    color="error"
                    startIcon={<DeleteIcon />}
                    style={{ width: '172px', height: '36px' }}
                    size="medium"
                    onClick={handleClick}
            >Delete</Button>
          </Grid>
        </Grid>
      </Box>
    </li>
  );
};

// <Grid item
//                 xs={10}
//           >
//             <Item>{item.name} {item.number}</Item>
//           </Grid>
//           <Grid item
//                 xs={6}
//           >
//             <Item>{item.number}</Item>
//           </Grid>
//           <Grid item
//                 xs
//           >
//             <Button variant="contained"
//                     onClick={handleClick}
//
//             ><DeleteIcon /> Delete</Button>
//           </Grid>

export { ContactItem };
