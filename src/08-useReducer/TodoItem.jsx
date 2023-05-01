export const TodoItem = ({ todo, onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="d-flex justify-content-between list-group-item">

      <span
        onClick={() => onToggleTodo(todo.id)}
        className={`align-self-center ${(todo.done) ? 'text-decoration-line-through' : 'text-decoration-none'}`}
      >
        {todo.description}
      </span>

      <button
        onClick={() => onDeleteTodo(todo.id)}
        className="btn btn-danger">
        delete
      </button>

    </li >
  )
}