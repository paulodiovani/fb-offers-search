import { combineReducers } from 'redux'
import * as types from './actionTypes'

const groups = (state = [], { type, group }) => {
  switch (type) {
    case types.GROUP_RESPONSE:
      return [...state, group]
    case types.GROUP_REQUEST:
    default:
      return state
  }
}

export default combineReducers({
  groups
})
