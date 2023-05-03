const { renderHook, act } = require("@testing-library/react")
const { useCounter } = require("../../src/hooks")


describe('useCounter', () => {
  it('should return default values', async () => {
    const { result } = renderHook(() => useCounter())
    const { counter, decrement, increment, reset } = result.current

    expect(counter).toBe(10)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  it("should return a counter with 100", () => {
    const { result } = renderHook(() => useCounter(100))
    const { counter } = result.current

    expect(counter).toBe(100)
  })

  it('should increment counter', () => {
    const { result } = renderHook(() => useCounter())
    const { increment } = result.current

    act(() => {
      increment()
      increment(2)
    })

    expect(result.current.counter).toBe(13)

  })

  it('should decrement counter', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement } = result.current

    act(() => {
      decrement()
      decrement(2)
    })

    expect(result.current.counter).toBe(7)

  })

  it('should reset counter', () => {
    const { result } = renderHook(() => useCounter())
    const { decrement, increment, reset } = result.current

    act(() => {
      increment()
      decrement(2)
      reset()
    })

    expect(result.current.counter).toBe(10)

  })
})