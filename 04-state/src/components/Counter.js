import { useState } from 'react'
import React from 'react'

function Counter() {

    //State created
    const [count, setCount] = useState(0);

    //Onclick Function
    const increase = () => {
        setCount(count + 1)
    }

    const decrease = () => {
        if (count <= 0) {
            setCount(-Infinity)
        } else {
            setCount(count - 1)
        }
    }

    const resetle = () => {
        setCount(0)
    }

    return (
        <div>
            <h3>
                {count < 0 ? "Eksi sonsuz" : count}
            </h3>
            <button onClick={increase}>Arttır</button>
            <button onClick={decrease}>Azalt</button>
            <button onClick={resetle}>Sıfırla</button>
        </div>
    )
}

export default Counter;