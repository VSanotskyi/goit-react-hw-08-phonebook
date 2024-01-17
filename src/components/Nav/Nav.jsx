import { NavLink } from 'react-router-dom';
import Link from '@mui/material/Link';

import { useAuth } from 'hooks';

const Nav = () => {
  const { authIsLog } = useAuth();

  const homeLink = (
    <Link underline="hover"
          color="#fff"
    >
      <NavLink to="/"
               style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Phonebook
      </NavLink>
    </Link>
  );
  const contactsLink = (
    <Link underline="hover"
          color="#fff"
    >
      <NavLink to="/contacts"
               style={{ color: 'inherit', textDecoration: 'none' }}
      >
        Contacts
      </NavLink>
    </Link>
  );

  return (
    <nav>
      {authIsLog ? contactsLink : homeLink}
    </nav>
  );
};

export { Nav };
