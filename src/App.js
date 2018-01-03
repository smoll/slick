import React from 'react'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import {Route, Switch} from 'react-router'
import createHistory from 'history/createBrowserHistory'

import configureStore from './redux/configureStore'
import PrivateRoute from './container/PrivateRoute'
import Home from './component/Home'
import CheatSheets from './component/CheatSheets'
import Login from './component/Login'
import Dashboard from './container/Dashboard'

const history = createHistory()
const store = configureStore(history)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cheat-sheets" component={CheatSheets} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default App
