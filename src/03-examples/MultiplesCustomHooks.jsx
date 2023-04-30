import { useCounter, useFetch } from "../hooks"
import { LoadingQuote, Quote } from "./"

export const MultiplesCustomHooks = () => {

  const { counter, increment } = useCounter(1)

  const { data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)


  const { quote, author } = !!data && data[0]

  return (
    <>
      <h1>BreakingBad quotes</h1>

      <hr />

      {hasError && <h3>Error</h3>}

      {
        isLoading
          ? <LoadingQuote />
          : <Quote quote={quote} author={author} />
      }

      <button
        className="btn btn-primary"
        onClick={() => increment(1)}
        disabled={isLoading}>
        Next quote
      </button>
    </>
  )
}