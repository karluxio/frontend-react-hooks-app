
export const initialState = []

export const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case '[TODO] add':
      return [...state, { ...payload }]

    case '[TODO] toggle':
      return [...state].map(todo => {
        if (todo.id === payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })

    case '[TODO] delete':
      return [...state].filter(todo => todo.id !== payload)

    default:
      return state
  }
}
