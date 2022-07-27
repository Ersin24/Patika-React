import './App.css';
import Counter from './components/Counter'
import { useState } from 'react'


function App() {
  //Visible Created
  const [visible, setVisible] = useState(true);

  //Visible Function
  const setVis = () => {
    setVisible(!visible)
  }
  return (
    <>
    { visible && <Counter /> } 
    <br />
    <button onClick={setVis}>Toggle</button>
    </>
  );
}

export default App;
