import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as authActions from '../redux/auth'
import Home from '../component/Home'

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...authActions,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(Home)
