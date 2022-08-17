import { NavLink, Routes, Route, Outlet } from 'react-router-dom'

import {useState, useEffect} from 'react'
import axios from 'axios'
import User from './User'

function Users() {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true)

    // Backend'e gidip ilgili veriyi alıyoruz
    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then( (res) => setUser(res.data) )
        .catch( (e) => console.log(e))
        .finally( () => setLoading(false) )
    },[])

    const activeClassName = "liElement"

  return (
    <div>
        <h3>Users</h3>
        <div>
            {loading && <div>Loading... </div> }
        </div>
        <ul>
            {/* Backendden aldığımız verileri map ile listeliyoruz */}
            {
                user.map( (res) => (
                    <li key={res.id}>
                        <NavLink className={ ({isActive}) => isActive ? activeClassName : undefined}  to={`${res.id}`}  > {res.name} </NavLink>
                    </li>
                ) )
            }
        </ul>
        
        <Outlet />
        {/* İç içe Route yapısını kullanıyoruz. Normalde root gider ama burada Users tanımlanmaya devam etmesini istiyoruz. İstersek altında bir route yapsı daha oluşturabiliriz. */}
        <Routes>
            <Route path=':id' element={<User />} />
        </Routes>
          

    </div>
  )
}

export default Users