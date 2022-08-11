import {useState, useEffect} from 'react'

function Native() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect( () => {

        fetch("https://jsonplaceholder.typicode.com/users")
            .then( (res) => res.json() ) //Gelen veriyi jsona çevirmemiz lazım
            .then( (res) => setUsers(res) ) //gelen veriyi usersa attık aslında
            .catch( (e) => console.log(e) ) //hata varsa consola yazdırdık
            .finally( () => setLoading(false)) // işlemlerin sonunda Loadingi false a çektik
    },[] )


  return (
    <div>
        <h3>Native Fetch Veri Çekme</h3>
        { loading && <div> loading.. </div>}
        {
            users.map( (data) => (
                <div key={data.id}> {data.name} </div>
            ) )
        }
    </div>
  )
}

export default Native