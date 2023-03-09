import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

function Main({ character, loading, error }) {
  return (
    <main className='flex flex-col'>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>Error</p> : null}
      <Character character={character} />
    </main>
  );
}

Main.propTypes = {
  character: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

export default Main;
