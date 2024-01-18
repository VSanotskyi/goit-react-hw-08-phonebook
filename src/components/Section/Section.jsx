import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const style = {
  title: {
    textAlign: 'center',
  },
};

const Section = ({ children, title }) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        sx={{ bgcolor: '#e0e3ea', height: '100%', width: '100vw' }}
      >
        {title && <h1 style={style.title}>{title}</h1>}
        {children}
      </Container>
    </React.Fragment>
  );
};

export { Section };
