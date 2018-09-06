import React from "react"
import queryString from "query-string"
import { navigate } from "@reach/router"

// manage your state entirely within the router, so that it's copiable
// https://gist.github.com/sw-yx/efd9ee71669413bca6a895d87e30742f

export default defaultURLState => Component => props => {
  const { location } = props
  const urlState = { ...defaultURLState, ...queryString.parse(location.search) }
  const setURLState = newState => {
    const finalState = { ...urlState, ...newState } // merge with existing urlstate
    Object.keys(finalState).forEach(function(k) {
      if (
        // Don't save some state values if it meets the conditions below.
        !finalState[k] || // falsy
        finalState[k] === `` || // string
        (Array.isArray(finalState[k]) && !finalState[k].length) || // array
        finalState[k] === defaultURLState[k] // same as default state, unnecessary
      ) {
        delete finalState[k] // Drop query params with new values = falsy
      }
    })
    return navigate(`${location.pathname}?${queryString.stringify(finalState)}`)
  }
  return (
    <Component
      setURLState={setURLState} // use this instead of `setState`
      urlState={urlState} // easier to read state from this instead of `location`
      {...props}
    />
  )
}
