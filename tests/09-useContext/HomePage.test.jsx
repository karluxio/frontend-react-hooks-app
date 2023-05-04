import { render, screen } from '@testing-library/react'
import { HomePage } from '../../src/09-useContext/HomePage'
import { UserContext } from '../../src/09-useContext/context/UserContext'

describe("HomePage", () => {
  it("should render component without user", () => {

    render(
      <UserContext.Provider value={{ user: null }}>
        <HomePage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toBe('null')
    // screen.debug()
  })

  it("should render component with user", () => {

    const user = {
      id: 1,
      name: 'Luciano'
    }

    render(
      <UserContext.Provider value={{ user }}>
        <HomePage />
      </UserContext.Provider>
    )

    const preTag = screen.getByLabelText('pre')
    expect(preTag.innerHTML).toContain(user.name)
    expect(preTag.innerHTML).toContain(`${user.id}`)
    expect(preTag.innerHTML).toContain(JSON.stringify(user, null, 2))
    // screen.debug()
  })
})