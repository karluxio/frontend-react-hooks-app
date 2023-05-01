import { TodosList } from "./TodosList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks"



export const TodoApp = () => {

  const { todos, handleNewTodo, handleDeleteTodo, handleToggleTodo, todosCount, pendingTodosCount } = useTodo()

  return (
    <>

      <h1>TodoApp: {todosCount()}, <small>pending: {pendingTodosCount()}</small></h1>
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