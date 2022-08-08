import { useState, useEffect } from 'react'
import Form from './Header'
import List from './List'
import Footer from './Footer'
import Info from './Info'

function Todo() {
    const [todo, setTodo] = useState([
        {
            yap: 'Learn JavaScript'
        },
        {
            yap: 'Learn React'
        },
        {
            yap: 'Have a life!'
        },
    ])

    useEffect(() => {
        console.log(todo)
    }, [todo])


    return (
        <>
            <section className='todoapp'>
                <Form todo={todo} addTodo={setTodo} />
                <List todo={todo} />
                <Footer todo={todo}  />
            </section >
            <Info />
        </>
    )
}

export default Todo