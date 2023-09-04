import { useDispatch, useSelector } from 'react-redux';
import ContactItem from '../ContactItem/ContactItem';
import { deleteContacts } from 'store/contacts/contactsSlice';

const ContactList = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };
  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  return (
    <ul>
      {filterContacts().map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          handleDelete={handleDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
