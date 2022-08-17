//verileri almak için useParams hookunu kullanıyoruz
import { useParams, Link } from 'react-router-dom'

import {useState, useEffect} from 'react'
import axios from 'axios'
import {Outlet} from 'react-router-dom'

function User() {
    //Gelen id'yi çekmek için useParams tanımını kullanmak zorundayız.
    const { id } = useParams();

    const [user,setUser] = useState({})

    const [loading, setLoading] = useState(true)

    // Backende gidip veriyi çekiyoruz
    useEffect(()=> {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then( (res) => setUser(res.data) )
        .catch( (e) => console.log("Hata", e))
        .finally(() => setLoading(false))
    },[id])

    return (
        <div>
            <h3>
               User Detail
            </h3>
            {loading && <div>Loading.. </div>}
            <p>
                {!loading &&   <code>
                {JSON.stringify(user)}
               </code>}

            </p>
            {/* Bir sonraki kullanıcıyı göstermek için burayı kullandık. Burada NavLink kullanmaya gerek yok çünkü bir stillendirme yapmayacağız */}
            <div>
               {parseInt(id)<10 ? <Link to={`/users/${parseInt(id)+1}`}>Next User {parseInt(id)+1} </Link> : <Link to={`/users/${1}`}> Turn Head </Link>}
            </div>


        </div>
    )
}

export default User