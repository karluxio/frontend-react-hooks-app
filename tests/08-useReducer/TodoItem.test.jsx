import { render, screen, fireEvent } from '@testing-library/react'
import { TodoItem } from '../../src/08-useReducer/TodoItem'

describe('TodoItem', () => {

  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()
  const todo = {
    id: 1,
    description: 'some description',
    done: false
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it("should match against snapshot", () => {
    const { container } = render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it("should call onToggleTodo when click on toggle button", async () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const span = screen.getByText(todo.description)
    fireEvent.click(span)
    expect(onToggleTodoMock).toHaveBeenCalledTimes(1)
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  it("should call onDeleteTodo when click on delete button", async () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const button = screen.getByRole('button', { name: /delete/i })
    fireEvent.click(button)
    expect(onDeleteTodoMock).toHaveBeenCalledTimes(1)
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })

  it("should has a className text-decoration-none", async () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const span = screen.getByText(todo.description)
    expect(span.className).toContain('text-decoration-none')
    expect(span.className).not.toContain('text-decoration-line-through')
  })

  it("should has a className text-decoration-line-through", async () => {

    todo.done = true

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onDeleteTodo={onDeleteTodoMock}
      />
    )

    const span = screen.getByText(todo.description)
    expect(span.className).toContain('text-decoration-line-through')
    expect(span.className).not.toContain('text-decoration-none')
  })
})