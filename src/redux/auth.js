import {push} from 'react-router-redux'

// Actions
const SUCCESS = 'pastiche/auth/SUCCESS'
const FAIL    = 'pastiche/auth/FAIL'

// Initial
const initialState = {
  isAuthenticated: false
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case FAIL:
      return {
        ...state,
        isAuthenticated: false,
      }
    default:
      return state
  }
}

// Action Creators
const authSuccess = () => ({
  type: SUCCESS
})

const authFail = () => ({
  type: FAIL
})

// Side Effects
export function login() {
  return dispatch => {
    console.log('#login called!')
    dispatch(authSuccess())
    dispatch(push('/'))
  }
}

export function logout() {
  return dispatch => {
    console.log('#logout called!')
    dispatch(authFail())
    dispatch(push('/login'))
  }
}
