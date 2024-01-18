import { ContactItem } from 'components';

const style = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '10px',
};

const ContactsList = ({ contactsItems, handleDelContacts }) => {
  return (
    <div>
      <ul style={style}>{
        contactsItems.map(item => <ContactItem
            key={item.id}
            item={item}
            handleDelContacts={handleDelContacts}
          />,
        )
      }</ul>
    </div>
  );
};

export { ContactsList };
