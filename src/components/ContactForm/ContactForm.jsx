import PropTypes from 'prop-types';
import styled from './ContacrForm.module.css';
import React, { useState } from 'react';
const ContactForm = ({ createContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChangeName = ({ target: { value } }) => {
    setName(value);
  };
  const handleChangeNumber = ({ target: { value } }) => {
    setNumber(value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    createContact(name, number); ///
    setName('');
    setNumber('');
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name
        <input
          className={styled.input}
          onChange={handleChangeName}
          value={name}
          type="text"
          name="name"
          id="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor="number">
        Number
        <input
          className={styled.input}
          onChange={handleChangeNumber}
          value={number}
          type="tel"
          name="number"
          id="number"
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={styled.button}>
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  createContact: PropTypes.func.isRequired,
};
export default ContactForm;
