import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { Section } from 'components';

const style = {
  wrapper: {
    width: 'vw',
    height: '88vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: '20px',
  },
};

export default function HomePage() {
  return (
    <Section>
      <div style={style.wrapper}>
        <h1 style={style.title}>Welcome to Phonebook</h1>
        <Link underline="hover"
              color="#1976d2"
        >
          <NavLink style={{ color: 'inherit', textDecoration: 'none' }}
                   to="/login"
          >Already on phonebook? log In</NavLink>
        </Link>
        <span>or</span>
        <Link underline="hover"
              color="#1976d2"
        >
          <NavLink style={{ color: 'inherit', textDecoration: 'none' }}
                   to="/registration"
          >Registration</NavLink>
        </Link>
      </div>

    </Section>
  );
};
