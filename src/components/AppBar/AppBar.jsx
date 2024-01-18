import * as React from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { Nav, UserMenu } from 'components';
import { useAuth } from 'hooks';

export default function ButtonAppBar() {
  const { authIsLog } = useAuth();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
            >
              {<Nav />}
            </Typography>
            {authIsLog && <UserMenu />}
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
