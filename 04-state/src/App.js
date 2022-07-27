import './App.css';

//UseState import işlemi
import { useState } from "react";

function App() {

  //Usesate Created
  const [name, setName] = useState("Ersin");
  const [surName, setSurName] = useState("Göç");
  const [age, setAge] = useState(29);
  const [evliMi, setEvliMi] = useState(false);
  ////Array Usestate ***
  const [friends, setFriends] = useState(["Ali", "Ahmet"]);
  ////Object Usestate ***
  const [address, setAdress] = useState( {title: "Ankara", zip: 1457} );

  //evliMi false ise
  if (!evliMi) {
    return <div>Lütfen Evlenin <button onClick={() => { setEvliMi(true) }}>Evlen</button></div>
  }

  //evliMi false değil ise
  return (

    <div className="App">

      <p>
        {name} - {surName} - {age}
      </p>
      <button onClick={() => { setName("Mihriban") }}>Name Change</button>
      <button onClick={() => { setSurName("Çolak") }}>Surname Change</button>
      <button onClick={() => { setAge(27) }}>Age Change</button>
      <button onClick={() => { setEvliMi(false) }}>Boşan</button>
      <hr />
      {/* Array verisini çektik */}
      {
        friends.map((friend, index) => (<div key={index}> {friend} </div>))
      }
      {/* Arraydan sonuna veri eklem */}
      <button onClick={() => { setFriends( [...friends, "Ayşe" ]) }}>
        Foot add
      </button>

      {/* Array başına veri ekleme  */}
      <button onClick={() => {setFriends(["Mihriban", ...friends])}}>Head add</button>
      <br />

      {/* Object State */}
      <h3>Address Object</h3>
      {address.title} - {address.zip}
      <button onClick={() => {setAdress( {...address, title: "İstanbul"} )}}>Title değiş</button>
    </div>


  );
}

export default App;
