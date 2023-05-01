import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

  const { description, onInputChange, onResetForm } = useForm({ description: '' })

  const onSubmit = (e) => {
    e.preventDefault()

    if (description <= 1) return
    onNewTodo({
      id: new Date().getTime(),
      description,
      done: false
    })

    onResetForm()
  }

  return (
    <>
      <h4>Add todo</h4>
      <hr />
      <form onSubmit={onSubmit}>
        <input
          className="form-control"
          name="description"
          onChange={onInputChange}
          placeholder="cleanup my house"
          type="text"
          value={description}
        />

        <button type="submit" className="btn btn-outline-primary mt-2">Add</button>
      </form>
    </>
  )
}