import { useCounter } from "../hook/useCounter"

export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter(10)

  return (
    <>
      <h1>Counter with hook: {counter}</h1>

      <hr />

      <button className="btn btn-success" onClick={() => increment(2)}>+</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
      <button className="btn btn-danger" onClick={() => decrement(2)}>-</button>
    </>
  )
}