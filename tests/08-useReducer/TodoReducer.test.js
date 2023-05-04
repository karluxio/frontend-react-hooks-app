import { todoReducer } from "../../src/08-useReducer/TodoReducer"

describe('TodoReducer', () => {

  const initialState = [{
    id: 1,
    description: 'some description',
    done: false
  }]

  it("should return initial state", () => {
    const newState = todoReducer(initialState, {})
    expect(newState).toEqual(initialState)
  })

  it('should add a todo', () => {

    const action = {
      type: "[TODO] add",
      payload: {
        id: 1,
        description: 'some description',
        done: false
      }
    }

    const newState = todoReducer(initialState, action)

    expect(newState).toHaveLength(2)
    expect(newState).toContainEqual(action.payload)
  })

  it('should remove a todo', () => {

    const action = {
      type: '[TODO] delete',
      payload: 1
    }

    const stateWithOneTodo = todoReducer(initialState, {})
    expect(stateWithOneTodo).toHaveLength(1)

    const newState = todoReducer(initialState, action)
    expect(newState).toHaveLength(0)
  })

  it('should toggle done property in todo', () => {

    const idTodoToToggle = 1

    const action = {
      type: '[TODO] toggle',
      payload: idTodoToToggle
    }

    const newState = todoReducer(initialState, action)
    expect(newState[0].done).toBeTruthy()

    const newState2 = todoReducer(newState, action)
    expect(newState2.done).toBeFalsy()
  })
})