import './App.css';
import { useState } from 'react';
import logo from './images/btc.png';


import TSParticles from './particles/TSParticles';

function App() {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState('');

  const changer = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
    if (value !== null) {
      setSearch(true);
    }
    if (value === null) {
      setSearch(false)
    }
  };

  return (
    <>

      <div className='App'>
        <TSParticles search={search} input={input} />
      </div>

    </>
  );
}

export default App;
