import { TodoItem } from "./TodoItem"

export const TodosList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {
        todos.length > 0 && todos.map(todo => (
          <TodoItem key={todo.id} todo={todo} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo} />
        ))
      }
    </ul>
  )
}