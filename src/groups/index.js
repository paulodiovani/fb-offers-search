import { connect } from 'react-redux'
import { groupsFetch } from '../store/groups/actions'
import group from './component'

const mapStateToProps = (state) => ({
  groups: state.groupsReducers.groups
})

const mapDispatchToProps = (dispatch) => ({
  groupsFetch: (user) => dispatch(groupsFetch(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(group)
