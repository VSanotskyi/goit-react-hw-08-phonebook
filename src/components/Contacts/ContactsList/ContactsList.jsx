import { ContactItem, FindContactForm } from 'components';

const style = {
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridGap: '10px',
};

const ContactsList = ({ contactsItems, handleDelContacts, handleFilter }) => {
    return (
      <div>
        <FindContactForm handleFilter={handleFilter} />
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
  }
;

export { ContactsList };
