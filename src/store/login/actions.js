import * as types from './actionTypes'

const loginSucceed = (user) => (dispatch) => {
  dispatch({ type: types.LOGIN_SUCCESS, user })
}

const loginFailed = (response) => (dispatch) => {
  dispatch({ type: types.LOGIN_FAILURE, status: response.status })
}

export {
  loginSucceed,
  loginFailed
}
