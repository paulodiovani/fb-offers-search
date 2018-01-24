import {
  applyMiddleware,
  createStore,
  compose
} from 'redux'

import logger from 'redux-logger'
import thunk from 'redux-thunk'
// import { routerMiddleware } from 'react-router-redux'
// import createBrowserHistory from 'history/createBrowserHistory'

import reducers from './reducers'

// export const history = createBrowserHistory()

const middlewares = [
  thunk
  // routerMiddleware(history)
]

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
)

if (isLocalhost) {
  middlewares.push(logger)
}

const store = createStore(
  reducers,
  undefined,
  compose(
    applyMiddleware(...middlewares)
  )
)

export default store
