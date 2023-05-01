import { useReducer, useEffect } from "react"
import { todosReducer, initialState } from "./TodoReducer"
import { TodosList } from "./TodosList"
import { TodoAdd } from "./TodoAdd"

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []
}

export const TodoApp = () => {

  const [todos, dispatch] = useReducer(todosReducer, initialState, init)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const handleNewTodo = (todo) => {
    dispatch({ type: '[TODO] add', payload: todo })
  }

  const handleDeleteTodo = (id) => {
    dispatch({ type: '[TODO] delete', payload: id })
  }

  const handleToggleTodo = (id) => {
    dispatch({ type: '[TODO] toggle', payload: id })
  }

  return (
    <>

      <h1>TodoApp: {todos.length}, <small>pending: 4</small></h1>
      <hr />

      <div className="row">

        <div className="col-7">
          <TodosList todos={todos} onDeleteTodo={handleDeleteTodo} onToggleTodo={handleToggleTodo} />
        </div>

        <div className="col-5">
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>

      </div>

    </>
  )
}