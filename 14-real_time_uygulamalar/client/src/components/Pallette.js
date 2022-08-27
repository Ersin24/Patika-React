import { useState } from 'react'
import { send } from '../socketApi'

function Pallette({ activeColor }) {

    const [color, setColor] = useState("#000")

    return (
        <div className='pallette'>
            <input type={"color"} value={activeColor} onChange={(e) => setColor(e.target.value)} />
            <button onClick={() => send(color)}>Click</button>
            <br />
            {activeColor}
        </div>
    )
}

export default Pallette