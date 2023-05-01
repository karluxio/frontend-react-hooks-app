import { useEffect, useReducer } from "react"
import { todosReducer } from "../08-useReducer/TodoReducer"

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []
}

export const useTodo = () => {

  const [todos, dispatch] = useReducer(todosReducer, [], init)

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

  const todosCount = () => todos.length

  const pendingTodosCount = () => todos.filter(todo => todo.done === false).length

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
    todosCount,
    pendingTodosCount
  }
}