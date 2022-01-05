import './App.css';
import { useState, useEffect } from 'react';
import data from './data.json'


import TSParticles from './particles/TSParticles';

function App(props) {
  const [search, setSearch] = useState(false);
  const [input, setInput] = useState('');




  // console.log("main", data.Bitcoin)







  return (
    <>

      <div className='App'>
        <TSParticles search={search} input={input} data={data} />
      </div>

    </>
  );
}

export default App;



// const changer = (e) => {
//   const value = e.target.value.toLowerCase();
//   setInput(value);
//   if (value !== null) {
//     setSearch(true);
//   }
//   if (value === null) {
//     setSearch(false)
//   }
// };