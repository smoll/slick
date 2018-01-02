import {routerReducer, routerMiddleware} from 'react-router-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import createHistory from 'history/createBrowserHistory'

// "Ducks" default export reducers
import auth from './auth'

export const history = createHistory()

export default createStore(
  combineReducers({routerReducer, auth}),
  applyMiddleware(routerMiddleware(history)),
)
