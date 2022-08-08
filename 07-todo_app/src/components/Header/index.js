import { useState, useEffect } from 'react'

const initialFormValues = { yap: "" }

function Form({ todo, addTodo }) {

  const [form, setForm] = useState(initialFormValues)

  useEffect(() => {
    setForm(initialFormValues)
  }, [todo])

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (form.yap === ""){
      return false;
    }

    addTodo( [...todo, form ])
  }

  return (

    <header className="header">
      <h1>todos</h1>
      <form onSubmit={onSubmit}>
        <input className="new-todo" placeholder="What needs to be done?" autoFocus onChange={onChangeInput} name="yap" value={form.yap} />
      </form>
    </header>

  )
}

export default Form