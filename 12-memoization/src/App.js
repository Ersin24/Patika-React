import './App.css';
import Header from './component/Header'
import { useState, useMemo, useCallback } from 'react'

function App() {
  const [number, setNumber] = useState(0);
  const [text, setText] = useState("");

  const data = useMemo( () => {
    return calculateObject();
  },[number])

  const increment = useCallback( () => {
    setNumber( (prevState) => prevState + 1)
  },[])

  return (
    <div className="App">
      <Header increment= {increment} data={data} number={number < 5 ? 0 : number} />
      <div>
        <span> {number} </span>
        
      </div>

      <br />
      <br />

      <input value={text} onChange={ ({target}) => setText(target.value) } />
    </div>
  );
}

function calculateObject(){
  console.log("Calculating...");
  for( let i=0; i<10000000; i++){}
  console.log("Calculating complate")

  return {name: "Mehmet"}
}

export default App;
