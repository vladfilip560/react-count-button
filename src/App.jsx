import Button from "./Button"
import Count from "./Count"
import {useState} from 'react'
function App() {
  let [number, setNumber] = useState(0);
  return(
  <>
    <Count number={number}/>
    <Button setNumber={setNumber}/>
  </>
  );
}

export default App
