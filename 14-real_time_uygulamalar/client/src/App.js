import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'
import Pallette from './components/Pallette';
import { init, subscribe } from './socketApi'

function App() {

  const [activeColor, setActiveColor] =useState("#282c34")

  useEffect( () => {
    init();

    subscribe( (color) => {
      setActiveColor(color);
    } );
  }, [])
  return (
    <div className="App" style={{backgroundColor: activeColor}}>
      <Pallette activeColor= {activeColor} />
    </div>
  );
}

export default App;

//npm i socket.io-client ile socket.io bağımlıklıklarını indirip backende bağlancaz.
//kök dizinde socketApi adında bir dosya yadık ve buraya import ettik.
//useEffect olduğunda çalıştırıyoruz

