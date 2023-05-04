import { render, screen, fireEvent } from '@testing-library/react'
import { LoginPage } from '../../src/09-useContext/LoginPage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe("LoginPage", () => {
  const user = {
    id: 1,
    name: 'Luciano'
  }

  it("should match against snapshot", () => {
    const { container } = render(
      <UserContext.Provider value={user}>
        <LoginPage />
      </UserContext.Provider>
    )

    expect(container).toMatchSnapshot()
  })

  it("should render user in pre tag", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(`${user.id}`)
  })

  it("should call setUser function when login button is clicked", () => {
    const setUserMock = jest.fn()
    render(
      <UserContext.Provider value={{ user, setUser: setUserMock }}>
        <LoginPage />
      </UserContext.Provider>
    )

    const button = screen.getByRole("button", { name: /login/i })
    fireEvent.click(button)
    expect(setUserMock).toHaveBeenCalledTimes(1)
    expect(setUserMock).toHaveBeenCalledWith({ id: 123, name: 'Luciano', email: 'luc@email.com' })
  })
})