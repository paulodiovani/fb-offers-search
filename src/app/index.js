import { connect } from 'react-redux'
import app from './component'

const mapStateToProps = (state) => ({
  status: state.loginReducers.status
})

const mapDispatchToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(app)
