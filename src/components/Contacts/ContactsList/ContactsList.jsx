import { ContactItem, FindContactForm } from 'components';
import css from './ContactsList.module.css';

const ContactsList = ({ contactsItems, handleDelContacts, handleFilter }) => {
    return (
      <div>
        <FindContactForm handleFilter={handleFilter} />
        <ul className={css.list}>{
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
