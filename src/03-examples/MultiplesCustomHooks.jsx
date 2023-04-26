import { useCounter } from "../hook/useCounter"
import { useFetch } from "../hook/useFetch"

export const MultiplesCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)


  const { quote, author } = !!data && data[0]

  return (
    <>
      <h1>BreakingBad quotes</h1>

      <hr />

      {hasError && <h3>Error</h3>}

      {isLoading
        ? (
          <div className="alert alert-info text-center">Loading...</div>
        )
        : (
          <blockquote className="blockquote text-end">
            <p className="mb-1">{quote}</p>
            <footer className="blockquote-footer">{author} </footer>
          </blockquote>
        )
      }

      <button className="btn btn-primary" onClick={() => increment(1)}>Next quote</button>
    </>
  )
}