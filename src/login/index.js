import { connect } from 'react-redux'
import { loginSucceed, loginFailed } from '../store/login/actions'
import login from './component'

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => ({
  loginSucceed: (user) => dispatch(loginSucceed(user)),
  loginFailed: (status) => dispatch(loginFailed(status))
})

export default connect(mapStateToProps, mapDispatchToProps)(login)
