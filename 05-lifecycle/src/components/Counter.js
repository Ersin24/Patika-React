//UseEffect import edildi
import { useState, useEffect } from 'react';

function Counter() {

    //Created Click event
    const addNumber = () => {
        setNumber(number + 1)
    }
    const changeName = () => {
        setName("Mihriban")
    }

    //Created State Hook
    const [number, setNumber] = useState(0);
    const [name, setName] = useState("Ersin");

    //Created Effect Hook
    useEffect(() => {
        console.log("Component mount edildi");
   
        const interval = setInterval( ()=> {
            setNumber((n) => n+1)
        }, 1000)
        
        //Mount edildiğinde burası çalışır
        return () => {
            clearInterval(interval)
        }
    }, [])

    useEffect( () => {
        console.log("Number state güncellendi")
    }, [number])

    useEffect(() => {
        console.log("Name state güncellendi")
    }, [name])

    return (
        <div>
            <h1>UseEffect - Lifecycle</h1>
            <h3>{number}</h3>
            <button onClick={addNumber}>Add Number</button>
            <h3>{name}</h3>
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}

export default Counter