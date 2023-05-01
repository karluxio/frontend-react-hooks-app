
export const initialState = [
  // {
  //   id: new Date().getTime(),
  //   description: 'Recollect soul gem',
  //   done: false
  // },
  // {
  //   id: new Date().getTime() + 100,
  //   description: 'Recollect power gem',
  //   done: true
  // }
]

export const todosReducer = (state = initialState, { type, payload }) => {
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
