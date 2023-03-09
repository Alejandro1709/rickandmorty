import { useEffect, useState } from 'react';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  const [, setInitialCharacters] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then(({ results }) => {
        setInitialCharacters(characters);
        localStorage.setItem('characters', JSON.stringify(results));
        setCharacters(results);
        setCurrentCharacter(results[3]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(error);
      });
  }, []);

  const handleFilter = (e) => {
    setInput(e.target.value);

    const charactersFromStorage = JSON.parse(
      localStorage.getItem('characters')
    );

    const filteredCharacters = charactersFromStorage.filter((c) =>
      c.name.toLowerCase().includes(e.target.value.toLowerCase())
    );

    setCharacters(filteredCharacters);
  };

  return (
    <>
      <Header
        input={input}
        characters={characters}
        onFilter={handleFilter}
        onCharChange={setCurrentCharacter}
      />
      <Main
        loading={loading}
        error={error}
        character={currentCharacter}
        onCharacterClick={setCurrentCharacter}
      />
    </>
  );
}

export default App;
