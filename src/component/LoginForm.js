import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Grid, Row, Col} from 'react-flexbox-grid'

class LoginForm extends Component {
  render() {
    const {login} = this.props
    return (
      <Grid fluid>
        <Row style={{paddingTop: '2em'}}>
          <Col xs={1} sm={2} lg={4} />
          <Col xs={12} sm={8} lg={4} >
            <div className='pt-card pt-elevation-3'>
              <h5>Please login to continue</h5>

              <div className='pt-form-group' style={{paddingTop: '1em'}}>
                <label className='pt-label' htmlFor='email'>
                  Email
                </label>
                <div className='pt-form-content'>
                  <input id='email' className='pt-input' style={{width: '100%'}} placeholder='test@test.com' type='email' dir='auto' />
                  <div className='pt-form-helper-text'>(Hint: test@test.com)</div>
                </div>
              </div>

              <div className='pt-form-group'>
                <label className='pt-label' htmlFor='password'>
                  Password
                </label>
                <div className='pt-form-content'>
                  <input id='password' className='pt-input' style={{width: '100%'}} type='password' dir='auto' />
                  <div className='pt-form-helper-text'>(Hint: test1234)</div>
                </div>
              </div>

              <Row end='xs'>
                <Col style={{paddingTop: '1em', paddingRight: '0.5em'}}>
                  <button type='button' className='pt-button pt-intent-primary' onClick={login}>
                    Login
                    <span className='pt-icon-standard pt-icon-arrow-right pt-align-right'></span>
                  </button>
                </Col>
              </Row>

            </div>
          </Col>
          <Col xs={1} sm={2} lg={4} />
        </Row>
      </Grid>
    )
  }
}

LoginForm.propTypes = {
  login: PropTypes.func.isRequired,
}

export default LoginForm
