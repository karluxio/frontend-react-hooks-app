import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { MultiplesCustomHooks } from "../../src/03-examples"
import { useFetch } from '../../src/hooks/useFetch.js'
import { useCounter } from '../../src/hooks/useCounter.js'

jest.mock('../../src/hooks/useFetch.js')
jest.mock('../../src/hooks/useCounter.js')

describe('MultiplesCustomHooks', () => {

  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockIncrement = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,

  })

  it("should match against snapshot", () => {

    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

    const { container } = render(<MultiplesCustomHooks />)

    expect(container).toMatchSnapshot()
  })

  it("should return a default component", () => {

    useFetch.mockReturnValue({ data: null, isLoading: true, hasError: null })

    render(<MultiplesCustomHooks />)

    expect(screen.getByText("BreakingBad quotes"))
    expect(screen.getByText("Loading..."))

    const nextButton = screen.getByRole("button", { name: /next/i })

    expect(nextButton).toBeInTheDocument()

    expect(nextButton.disabled).toBeTruthy()

    // screen.debug()
  })

  it("should render a quote", () => {


    useFetch.mockReturnValue({
      data: [{ author: 'john doe', quote: 'some quote' }],
      isLoading: false,
      hasError: null
    })

    render(<MultiplesCustomHooks />)

    expect(screen.getByText(/some quote/i)).toBeTruthy()
    expect(screen.getByText(/john doe/i)).toBeTruthy()

    const nextButton = screen.getByRole("button", { name: /next/i })
    expect(nextButton.disabled).toBeFalsy()

    // screen.debug()

  })

  it("should call increment function", () => {

    useFetch.mockReturnValue({
      data: [{ author: 'john doe', quote: 'some quote' }],
      isLoading: false,
      hasError: null
    })

    render(<MultiplesCustomHooks />)

    const nextButton = screen.getByRole("button", { name: /next/i })
    fireEvent.click(nextButton)

    expect(useCounter).toHaveBeenCalled()
  })
})