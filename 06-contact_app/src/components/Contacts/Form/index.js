import { useState, useEffect } from 'react'

const initialFormValues = { fullname: "", phone_number: ""}

function Form( {addContact, contacts} ) {

  const [form, setForm] = useState(initialFormValues);

  //Veri eklendiği anda form değerlerini sıfırlıyoruz.
  useEffect( () => {
    setForm(initialFormValues)
  }, [contacts])

  //Value değiştiği anda
  const onChangeInput = (e) => {
    setForm( {...form, [e.target.name]: e.target.value })
  }

  //Submit edildiği anda
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === ""){
      return false;
    }

    addContact( [...contacts, form]);

  }


  return (
    <form onSubmit={onSubmit}>

      <div>
        <input name='fullname' placeholder='Full Name' value={form.fullname} onChange={onChangeInput} />
      </div>

      <div>
        <input name='phone_number' placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput} />
      </div>

      <div>
        <button className='btn'>Add</button>
      </div>

    </form>
  )
}

export default Form