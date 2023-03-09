import React from 'react';
import FilterBar from './FilterBar';
import Characters from './Characters';
import PropTypes from 'prop-types';

function Header({ input, onFilter, onCharChange, characters }) {
  return (
    <header className='flex flex-col gap-2 bg-midnight h-40 w-full'>
      <FilterBar input={input} onFilter={onFilter} />
      <Characters characters={characters} onCharChange={onCharChange} />
    </header>
  );
}

Header.propTypes = {
  input: PropTypes.string,
  onFilter: PropTypes.func,
  characters: PropTypes.array,
  onCharChange: PropTypes.func,
};

export default Header;
