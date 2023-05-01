export const initialState = [
  {
    id: 1,
    todo: 'recollect the soul gem',
    done: false
  }
]

export const todosReducer = (state = initialState, action = {}) => {

  if (action.type === "[TODO] add todo") {
    return [...state, action.payload]
  }

  return state
}

let todos = todosReducer()

const newTodo = {
  id: 2,
  todo: "recollect the power gem",
  done: true
}

const addTodoAction = {
  type: '[TODO] add todo',
  payload: newTodo
}

todos = todosReducer(todos, addTodoAction)

console.log({ todos });
