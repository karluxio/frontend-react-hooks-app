import { render, screen } from '@testing-library/react'
import { MainApp } from '../../src/09-useContext/MainApp'
import { MemoryRouter } from 'react-router-dom'

describe("MainApp", () => {
  it("should match against snapshot", () => {
    const { container } = render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )

    expect(container).toMatchSnapshot()
  })

  it("should render Home page", () => {
    render(
      <MemoryRouter>
        <MainApp />
      </MemoryRouter>
    )
    // screen.debug()
    expect(screen.getByRole('heading', { level: 1, name: /home/i }))
  })

  it("should render Login page", () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <MainApp />
      </MemoryRouter>
    )
    // screen.debug()
    expect(screen.getByRole('heading', { level: 1, name: /login/i }))
    expect(screen.getByRole("link", { name: /login/i }).className).toContain("active")
  })

  it("should render About page", () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <MainApp />
      </MemoryRouter>
    )
    // screen.debug()
    expect(screen.getByRole('heading', { level: 1, name: /about/i }))
    expect(screen.getByRole("link", { name: /about/i }).className).toContain("active")
  })

  it("should render Home page in /*", () => {
    render(
      <MemoryRouter initialEntries={['/any-other-path']}>
        <MainApp />
      </MemoryRouter>
    )
    // screen.debug()
    expect(screen.getByRole('heading', { level: 1, name: /home/i })).toBeTruthy()
  })
})