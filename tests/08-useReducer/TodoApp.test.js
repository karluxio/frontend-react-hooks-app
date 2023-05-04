import { render, screen } from '@testing-library/react'
import { useTodo } from '../../src/hooks'
import { TodoApp } from '../../src/08-useReducer/TodoApp'

jest.mock('../../src/hooks/useTodo.js')

const todos = [
  {
    id: 1,
    description: 'some description',
    done: false
  }
]

describe("TodoApp", () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const handleNewTodoMock = jest.fn()
  const handleDeleteTodoMock = jest.fn()
  const handleToggleTodoMock = jest.fn()
  const todosCountMock = jest.fn(() => todos.length)
  const pendingTodosCountMock = jest.fn(() => todos.filter(todo => todo.done !== true).length)

  useTodo.mockReturnValue({
    todos,
    handleNewTodoMock,
    handleDeleteTodoMock,
    handleToggleTodoMock,
    todosCount: todosCountMock,
    pendingTodosCount: pendingTodosCountMock
  })

  it("should match against snapshot", () => {
    const { container } = render(<TodoApp />)
    expect(container).toMatchSnapshot()
  })

  it("should render amount and pending todos in title", () => {
    render(<TodoApp />)

    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(`TodoApp: ${todos.length}`)
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      `pending: ${todos.filter(todo => todo.done !== true).length}`
    )
    // screen.debug()
  })

  it("should render a list of todos with length 1", () => {
    render(<TodoApp />)
    expect(screen.getAllByRole('listitem')).toHaveLength(1)
  })

  it("should render an input", () => {
    render(<TodoApp />)
    expect(screen.getByRole("textbox")).toBeTruthy()
  })
})