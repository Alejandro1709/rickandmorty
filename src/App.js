import { useEffect, useState } from 'react';

function App() {
  const [initialCharacters] = useState(
    JSON.parse(localStorage.getItem('characters'))
  );
  const [, setCharacters] = useState([]);
  const [filteredCharacters, setFilteredCharacters] = useState([]);

  const [input, setInput] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then(({ results }) => {
        localStorage.setItem('characters', JSON.stringify(results));
        setCharacters(results);
      });
  }, []);

  const handleFilter = (e) => {
    setInput(e.target.value);

    const filteredCharacters = initialCharacters.filter((c) =>
      c.name.toLowerCase().includes(input.toLowerCase())
    );

    setFilteredCharacters(filteredCharacters);

    console.log(filteredCharacters);
  };

  return (
    <>
      <header className='flex flex-col gap-2 bg-midnight h-40 w-full'>
        <div className='flex flex-row gap-4 text-white p-4'>
          <input
            className='flex-1 bg-midnight p-2 rounded-md'
            type='text'
            placeholder='Search here...'
            value={input}
            onChange={handleFilter}
          />
          <button className='bg-midnightLight rounded-md'>Search</button>
        </div>
        <div className='flex bg-midnight overflow-scroll'>
          <ul className='flex flex-row'>
            {filteredCharacters.map((c) => (
              <li key={c.id} className='h-20 w-20 bg-gray-400 bg-cover'>
                <img src={c.image} alt={c.name} />
              </li>
            ))}
          </ul>
        </div>
      </header>
      <main className='flex flex-col'>
        <article className='bg-red-200 h-[240px]'></article>
        <article className='bg-red-300 h-[240px]'></article>
        <article className='bg-red-400 h-[240px]'></article>
        <article className='bg-red-500 h-[240px]'></article>
      </main>
    </>
  );
}

export default App;
