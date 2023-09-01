import PropTypes from 'prop-types';
import styled from './ContactItem.module.css';
const ContactItem = ({ contact: { name, number, id }, handleDelete }) => {
  return (
    <li className={styled.item}>
      {name}: {number}
      <button className={styled.button} onClick={() => handleDelete(id)}>
        Delete
      </button>
    </li>
  );
};
ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default ContactItem;
