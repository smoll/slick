import {routerReducer, routerMiddleware} from 'react-router-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunkMiddleware from 'redux-thunk'

// "Ducks" default export reducers
import auth from './auth'

export default function configureStore(history, preloadedState = {}) {
  return createStore(
    combineReducers({routerReducer, auth}),
    preloadedState,
    applyMiddleware(
      routerMiddleware(history),
      thunkMiddleware
    )
  )
}
