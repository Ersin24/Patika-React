import { useState } from 'react'

function InputExample() {

    const [form, setForm] = useState({ name: "", surName:""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

  return (
    <div>
        Name <br />
        <input name='name' value={form.name} onChange={onChangeInput} />

        <br />

        SurName <br />

        <input name='surName' value={form.surName} onChange={onChangeInput} />
         <br />
         <br />
         <br />
        {form.name} {form.surName}
    </div>
  )
}

export default InputExample