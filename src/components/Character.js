import React from 'react';
import PropTypes from 'prop-types';

function Character({ character }) {
  return (
    <article className='bg-midnightLight h-[240px]'>
      <div className='flex flex-col justify-center gap-4 items-center h-full'>
        <img
          className='h-40 w-40 rounded-lg'
          src={character.image}
          alt={character.name}
        />
        <h1 className='text-3xl font-bold text-white'>{character.name}</h1>
      </div>
    </article>
  );
}

Character.propTypes = {
  character: PropTypes.object,
};

export default Character;
