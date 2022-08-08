import { useState } from 'react'

function List({ todo }) {



  return (
    <section className='main'>

      <ul className='todo-list'>
        {
          todo.map((item, index) =>
          (
            <li>
              <div key={index} className="view">
                <input className="toggle" type="checkbox" />
                <label>
                  {item.yap}
                </label>
                <button className="destroy"></button>
              </div>
            </li>
          ))
        }

      </ul>
    </section>

  )
}

export default List