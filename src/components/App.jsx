import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
const App = () => {
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
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};

export default App;
