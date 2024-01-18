import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  AddContactForm,
  ContactsList,
  FindContactForm,
  Section,
} from 'components';
import {
  addContactThunk,
  delContactThunk,
  getAllContactsThunk, selectFilter, selectItems,
  selectVisibleContacts,
  setFilterAction,
} from 'store/contacts';

export default function ContactsPage() {
  const dispatch = useDispatch();
  const contactsItems = useSelector(selectVisibleContacts);
  const filter = useSelector(selectFilter);
  const items = useSelector(selectItems);

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
      {items.length > 0 && <FindContactForm handleFilter={handleFilter} />}
      {contactsItems.length > 0 && <ContactsList contactsItems={contactsItems}
                                                 handleDelContacts={handleDelContacts}
      />}
      {!filter && contactsItems.length === 0 && <p>No contacts</p>}
      {filter && contactsItems.length === 0 && <p>Not found</p>}
    </Section>
  );
};

