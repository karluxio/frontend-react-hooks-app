import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/TodoReducer"

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init)

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

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo => todo.done === false).length
  }
}