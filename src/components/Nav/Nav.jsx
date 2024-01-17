import { Link } from 'react-router-dom';

import { useAuth } from 'hooks';

const Nav = () => {
  const { authIsLog } = useAuth();

  const homeLink = (
    <Link to="/">
      Phonebook
    </Link>
  );
  const contactsLink = (
    <Link to="/contacts"
    >
      Contacts
    </Link>
  );

  return (
    <nav>
      {contactsLink}
      <p></p>
      {homeLink}
      <p></p>
      {authIsLog ? contactsLink : homeLink}
    </nav>
  );
};

export { Nav };
