import { combineReducers } from 'redux'
import loginReducers from './login/reducers'
import groupsReducers from './groups/reducers'

export default combineReducers({
  groupsReducers,
  loginReducers
})
