function App() {
  return (
    <div className='App'>
      <header className='flex flex-col gap-2 bg-[#272B33] h-40 w-full'>
        <div className='flex flex-row gap-4 text-white p-4'>
          <input
            className='flex-1 bg-[#212329] p-2 rounded-md'
            type='text'
            placeholder='Search here...'
          />
          <button className='bg-[#212329] rounded-md'>Search</button>
        </div>
        <div className='flex bg-[#272B33] overflow-scroll'>
          <ul className='flex flex-row'>
            <li className='h-20 w-20 bg-gray-400'>Rick</li>
            <li className='h-20 w-20 bg-gray-500'>Rick</li>
            <li className='h-20 w-20 bg-gray-600'>Rick</li>
            <li className='h-20 w-20 bg-gray-700'>Rick</li>
          </ul>
        </div>
      </header>
      <div className=''>BOTTOM</div>
    </div>
  );
}

export default App;
