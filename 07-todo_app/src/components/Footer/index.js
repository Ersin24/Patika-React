import React from 'react'


function Footer( {todo}) {
    return (

        <footer className="footer">
            <span className="todo-count">
                <strong>
                    {todo.length}
                </strong>
                items 
            </span>
        </footer>

    )
}

export default Footer