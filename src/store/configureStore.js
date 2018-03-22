import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from 'store/rootReducer'

let middleware = [thunk]

if (process.env.MODE === 'development') {
  const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default()

  const logger = createLogger({ collapsed: true })
  middleware = [...middleware, reduxImmutableStateInvariant, logger]
} else {
  middleware = [...middleware]
}

export default (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
  )
}