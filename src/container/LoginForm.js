import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as authActions from '../redux/auth'
import LoginForm from '../component/LoginForm'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...authActions,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(LoginForm)
