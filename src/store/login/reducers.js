import { combineReducers } from 'redux'
import * as types from './actionTypes'

const user = (state = {}, { type, user }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return user
    case types.LOGIN_FAILURE:
      return null
    default:
      return state
  }
}

const status = (state = 'signed out', { type, status }) => {
  switch (type) {
    case types.LOGIN_SUCCESS:
      return 'connected'
    case types.LOGIN_FAILURE:
      return status
    default:
      return state
  }
}

export default combineReducers({
  user,
  status
})
