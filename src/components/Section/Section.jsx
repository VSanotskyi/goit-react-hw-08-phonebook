import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const Section = ({ children, title }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{ bgcolor: '#e0e3ea', height: '100%' }}

      >
        {title && <h1>{title}</h1>}
        {children}
      </Container>
    </React.Fragment>
  );
};

export { Section };
