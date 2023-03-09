import React from 'react';
import PropTypes from 'prop-types';

function Characters({ characters, onCharChange }) {
  const handleClick = (character) => {
    console.log('hOLA', character);
    onCharChange(character);
  };
  return (
    <div className='flex bg-midnight overflow-scroll'>
      <ul className='flex flex-row'>
        {characters.map((c) => (
          <li
            key={c.id}
            className='h-20 w-20 bg-gray-400 bg-cover hover:scale-90 transition-all cursor-pointer'
            onClick={() => handleClick(c)}
          >
            <img src={c.image} alt={c.name} />
          </li>
        ))}
      </ul>
    </div>
  );
}

Characters.propTypes = {
  characters: PropTypes.array,
  onCharChange: PropTypes.func,
};

export default Characters;
