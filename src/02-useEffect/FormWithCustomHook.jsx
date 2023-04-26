import { useForm } from "../hook/useForm"

export const FormWithCustomForm = () => {

  const { onInputChange, onResetForm, name, email, password } = useForm({
    name: '',
    email: '',
    password: '',
  })

  return (
    <>
      <h1>Form with custom hook</h1>

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
      <input
        className="form-control mt-2 "
        name="password"
        placeholder="enter your password here"
        type="password"
        value={password}
        onChange={onInputChange}
      />

      <button className="btn btn-primary" onClick={onResetForm}>Reset</button>
    </>
  )
}