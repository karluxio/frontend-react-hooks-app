import { useState } from "react"
import { Message } from "./Message"

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  const onInputChange = ({ target: { name, value } }) => {
    setFormState({
      ...formState,
      [name]: value
    })
  }


  return (
    <>
      <h1>Simple Form</h1>

      <hr />

      <input
        className="form-control"
        name="name"
        placeholder="Username"
        type="text"
        value={name}
        onChange={onInputChange}
      />
      <input
        className="form-control mt-2 "
        name="email"
        placeholder="email@email.com"
        type="text"
        value={email}
        onChange={onInputChange}
      />

      {
        name === 'karluxio' && <Message />
      }

    </>
  )
}