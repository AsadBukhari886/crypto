import './App.css';
import { useState } from 'react';
import Ts_Particles from './particles/Ts_Particles';


function App() {
  const [search, setSearch] = useState(true)
  const [input, setInput] = useState('')

const changer=(e)=>{
const value=e.target.value;
setInput(value)
if(value!==""){
  setSearch(false)
}
}
  return (
    <>
      {/* {search ? null : <Ts_Particles />} */}

      <div className="App">
      <Ts_Particles search={search}/>
        <div className='input'>

          <input placeholder='search' value={input} onChange={(e)=>changer(e)} />
        </div>

      </div>

    </>
  );
}

export default App;
