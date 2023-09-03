import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { createContact, deleteContacts } from 'store/contacts/contactsSlice';
import { setFilter } from 'store/filter/filterSlice';

const App = () => {
  const { contacts } = useSelector(state => state.contacts);
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch(deleteContacts(id));
  };

  const handleCreateContact = (name, number) => {
    if (isDuplicate(name)) return alert(`${name} is already in contacts(( `);
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(createContact(newContact));
  };
  const isDuplicate = name => contacts.find(contact => contact.name === name);

  const onFilterChange = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };

  const filterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <div
      style={{
        height: '100vh',
        padding: '20px',
        fontSize: 20,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <div>
        <ContactForm createContact={handleCreateContact} />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter onChange={onFilterChange} filteredBy={filter} />
        <ContactList contacts={filterContacts()} handleDelete={handleDelete} />
      </div>
    </div>
  );
};

export default App;
