import { setFilter } from 'store/filter/filterSlice';
import styled from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const { filter } = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const onFilterChange = e => {
    const value = e.currentTarget.value;
    dispatch(setFilter(value));
  };
  return (
    <label>
      Find contacts by name
      <input
        className={styled.input}
        type="text"
        name="filter"
        onChange={e => onFilterChange(e)}
        value={filter}
      />
    </label>
  );
};

export default Filter;
