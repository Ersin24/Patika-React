//Import Components
import Form from './Form'
import List from './List'
import "./styles.css"

//Import Hooks
import { useState, useEffect } from 'react'


function Contact() {

    const [contacts, setContacts] = useState([
        {
            fullname: "Ahmet",
            phone_number: "1235456"
        },
        {
            fullname: "Ali",
            phone_number: "65463123"
        },
        {
            fullname: "Mehmet",
            phone_number: "5498123"
        }
    ]);

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

    return (
        <div id='container'>
            <h3>Contacts</h3>
            <List contacts= {contacts} />
            <Form addContact={setContacts} contacts={contacts} />
        </div>

    )
}

export default Contact