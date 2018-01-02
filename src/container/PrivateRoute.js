import {connect} from 'react-redux'
import PrivateRoute from '../component/PrivateRoute'

export default connect(state => ({
  isAuthenticated: state.auth.isAuthenticated
}))(PrivateRoute)
