import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch} from 'react-router'
import createHistory from 'history/createBrowserHistory'

import configureStore from './redux/configureStore'
import PrivateRoute from './container/PrivateRoute'
import Login from './component/Login'
import Home from './container/Home'

const history = createHistory()
const store = configureStore(history)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/" component={Home} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
