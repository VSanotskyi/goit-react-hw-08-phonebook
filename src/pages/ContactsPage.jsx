import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AddContactForm, ContactsList, Section } from 'components';
import {
  addContactThunk,
  delContactThunk,
  getAllContactsThunk,
  selectVisibleContacts,
  setFilterAction,
} from 'store/contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contactsItems = useSelector(selectVisibleContacts);

  const handleFilter = (filter) => {
    dispatch(setFilterAction(filter));
  };

  const handleAddContact = (contact) => {
    dispatch(addContactThunk(contact));
  };

  const handleDelContacts = (contactId) => {
    dispatch(delContactThunk(contactId));
  };

  useEffect(() => {
    dispatch(getAllContactsThunk());
  }, [dispatch]);

  return (
    <Section title="Contacts">
      <AddContactForm handleAddContact={handleAddContact} />
      {contactsItems && <ContactsList contactsItems={contactsItems}
                                      handleDelContacts={handleDelContacts}
                                      handleFilter={handleFilter}
      />}
    </Section>
  );
};

