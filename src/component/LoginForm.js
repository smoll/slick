import React from 'react'
import PropTypes from 'prop-types'

import MainPanel from './MainPanel'

const LoginForm = ({login}) => (
  <MainPanel>
    <div className='pt-card pt-elevation-3'>
      <h5 style={styles.title}>Please login to continue</h5>

      <div className='pt-form-group'>
        <label className='pt-label' htmlFor='email'>
          Email
        </label>
        <div className='pt-form-content'>
          <input id='email' className='pt-input' style={styles.input} placeholder='test@test.com' type='email' dir='auto' />
          <div className='pt-form-helper-text'>(Hint: test@test.com)</div>
        </div>
      </div>

      <div className='pt-form-group'>
        <label className='pt-label' htmlFor='password'>
          Password
        </label>
        <div className='pt-form-content'>
          <input id='password' className='pt-input' style={styles.input} type='password' dir='auto' />
          <div className='pt-form-helper-text'>(Hint: test1234)</div>
        </div>
      </div>

      <div style={styles.buttons}>
        <button type='button' className='pt-button pt-intent-primary' onClick={login}>
          Login
          <span className='pt-icon-standard pt-icon-arrow-right pt-align-right'></span>
        </button>
      </div>

    </div>
  </MainPanel>
)

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
}

const styles = {
  title: {
    paddingBottom: '1em',
  },
  input: {
    width: '100%',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: '1em',
    paddingRight: '0.5em',
  },
}

export default LoginForm
