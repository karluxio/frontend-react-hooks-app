import { useState, useEffect } from "react"

export const useFetch = (url) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: null
  })

  useEffect(() => {
    const getGifs = async () => {
      fetch(url)
        .then(resp => resp.json())
        .then(data => setState({ data, loading: false, hasError: null }))
        .catch(err => setState({ data: null, isLoading: false, hasError: err }))
    }

    getGifs()

  }, [url])


  return {
    data: state.data,
    hasError: state.hasError,
    isLoading: state.isLoading,
  }
}