import styled from './Filter.module.css';
import PropTypes from 'prop-types';

const Filter = ({ filteredBy, onChange }) => {
  return (
    <label>
      Find contacts by name
      <input
        className={styled.input}
        type="text"
        name="filter"
        onChange={e => onChange(e)}
        value={filteredBy}
      />
    </label>
  );
};
Filter.propTypes = {
  filteredBy: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
