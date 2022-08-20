import React from 'react'

function Header( { number, data, increment } ) {
    {console.log("Re-rendered")}

  return (
    <div>
        <h1>Header - {number} </h1>
       <br />
       <br />
       <button onClick={increment}> Increase  </button>
       <code>
        {JSON.stringify(data)}
       </code>
    </div>
  )
}

export default React.memo(Header)