import {useState, useEffect} from 'react'
import axios from 'axios'
//Burada json yapmamıza gerek yok

function Veriaxios() {

    const [kullanicilar, setKullanicilar] = useState( [] );
    const [yukleniyor, setYukleniyor] = useState(true); 
 
    useEffect( () => { 

        axios("https://jsonplaceholder.typicode.com/users")
            .then( (res) => setKullanicilar(res.data)) //responsu dataya cevirdik farklı olarak
            .catch( (e) => console.log(e))
            .finally( () => setYukleniyor(false))

    },[])

    return (
    <>
        <h3> Axios Veri Çekme </h3>
        {yukleniyor && <div>Yükleniyor...</div>}
        {
            kullanicilar.map( (res) => <div key={res.id}> {res.address.street} </div> )
        }
    </>
  )
}

export default Veriaxios