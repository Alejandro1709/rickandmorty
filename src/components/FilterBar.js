import React from 'react';
import PropTypes from 'prop-types';

function FilterBar({ input, onFilter }) {
  return (
    <div className='flex flex-row gap-4 text-white p-4'>
      <input
        className='flex-1 bg-midnight p-2 rounded-md'
        type='text'
        placeholder='Search here...'
        value={input}
        onChange={onFilter}
      />
      <button className='bg-midnightLight rounded-md'>Search</button>
    </div>
  );
}

FilterBar.propTypes = {
  input: PropTypes.string,
  onFilter: PropTypes.func,
};

export default FilterBar;
