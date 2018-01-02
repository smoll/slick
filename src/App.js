import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch} from 'react-router'

import store, {history} from './redux/store'
import PrivateRoute from './container/PrivateRoute'
import Login from './component/Login'
import Home from './container/Home'


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
