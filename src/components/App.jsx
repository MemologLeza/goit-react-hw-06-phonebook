import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');
  useEffect(() => {
    const localContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localContacts?.length > 0) setContacts(localContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const createContact = (name, number) => {
    if (isDuplicate(name)) return alert(`${name} is already in contacts(( `);
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    setContacts(prev => [newContact, ...prev]);
  };
  const isDuplicate = name => contacts.find(contact => contact.name === name);

  const handleDelete = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };
  const onFilterChange = e => {
    setFilter(e.currentTarget.value);
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
        <ContactForm createContact={createContact} />
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
