import './App.css';
import { useState } from 'react';
// <<<<<<< HEAD

// =======
import TSParticles from './particles/TSParticles';
// >>>>>>> 6c70786b8400492137724ce83846a898f850707f

function App() {
  const [search, setSearch] = useState(true);
  const [input, setInput] = useState('');

  const changer = (e) => {
    const value = e.target.value;
    setInput(value);
    if (value !== '') {
      setSearch(false);
    }
  };

  return (
    <>
      {/* {search ? null : <Ts_Particles />} */}

      {/* <<<<<<< HEAD */}
  
        {/* ======= */}
        <div className='App'>
          <TSParticles search={search} />
          <div className='input'>
            <input
              placeholder='search'
              value={input}
              onChange={(e) => changer(e)}
            />
            {/* >>>>>>> 6c70786b8400492137724ce83846a898f850707f */}
          </div>
        </div>
      {/* </div> */}
      {/* </div> */}

      {/* <<<<<<< HEAD */}
      {/* <Popup /> */}

      {/* // ======= */}
      {/* >>>>>>> 6c70786b8400492137724ce83846a898f850707f */}
    </>
  );
}

export default App;
