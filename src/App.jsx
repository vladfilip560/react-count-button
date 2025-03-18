import Button from "./Button"
import Count from "./Count"
import {useState} from 'react'
import './App.css'
function App() {
  let [number, setNumber] = useState(0);
  return(
  <div className='app'>
    <Count number={number}/>
    <Button setNumber={setNumber}/>
  </div>
  );
}

export default App
