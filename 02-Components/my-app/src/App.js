/*
JSX BİÇİMİ

1- Componentleri kullanırken mutlaka baş harfleri büyük olaacak şekilde çek!
2- Mutlaka kapsayıcı bir element olsun. Boş bir kapsayıcı istersek <> ... </> yapısını kullanabiliriz.
3- Js için özel olan isimleri kullanma! className="" ve htmlFor="" ifadelerini kullanabiliriz.
*/

//Default olarak gelen css dosyası
import './App.css';

//Dışarıda yadığımız Header componentini import ediyoruz
import Header from './components/Header';

// React.Freagment Kullanımı için Çağırdık
import React from 'react'; 

//Değişken Created
const name = "Ersin";
const surName = "Göç";
let d = new Date;
const dt = 1993;
const age = d.getFullYear() - dt;


function App(){
  return(
    /* Normal Hali
    // <div>
    //   Header componentini içeri aktardık 
    //   <Header /> 
    //   <p>Ana js olan app.js dosyasıdır</p>
    //   <label htmlFor='selam'>İsim</label>
    //   <input type={"text"} id={"selam"} defaultValue={"boş"}></input>
    // </div> 
    */
    
    //Freagment hali <> </> Kullanımı
    // <>
    //   {/*Header componentini içeri aktardık */}
    //   <Header /> 
    //   <p>Ana js olan app.js dosyasıdır</p>
    //   <label htmlFor='selam'>İsim</label>
    //   <input type={"text"} id={"selam"} defaultValue={"boş"}></input>
    // </>

    //React.Fragment Kullanımı
    <React.Fragment>
       <Header /> 
       <h4>Freagment Kullanımı Yapıldı</h4>
       <p> 
        {/* Değişken Kullanımı Template Literals */}
        {`isim : ${name}  Soyisim: ${surName}`} <br/>
        Yaş Bilgileri {age}
       </p>
       <p>
        {/* Koşullu Değişken Kullanımı - Ternary */}
        { age > 18 ? "Giriş yapabilirsiniz" : `Giriş yapamazsınız!! ${age}` }
       </p>
       <p>Ana js olan app.js dosyasıdır</p>
       <label className='firstClass' htmlFor='selam'>İsim</label>
       <input type={"text"} id={"selam"} defaultValue={"boş"}></input>
    </React.Fragment>
  )
}

export default App;
