import * as types from './actionTypes'
import config from '../../config.json'

const groupsFetch = () => (dispatch) => {
  config.facebook.groupIds.forEach((gid) => {
    dispatch({ type: types.GROUP_REQUEST, gid })

    window.FB.api(
      `/${gid}?fields=cover,name,description`,
      (group) => {
        dispatch({ type: types.GROUP_RESPONSE, group })
      }
    )
  })
}

export {
  groupsFetch
}
