import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { Section } from 'components';

export default function ErrorPage() {
  return (
    <Section title="Error, page not defined :(">
      <Link underline="hover"
            color="#1976d2"
      >
        <NavLink to="/"
                 style={{ color: 'inherit', textDecoration: 'none' }}
        >Go home
        </NavLink>
      </Link>
    </Section>
  );
};

