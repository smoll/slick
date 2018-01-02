import React, {Component} from 'react'
import {Intent, Spinner, Icon, FormGroup} from "@blueprintjs/core"
import {Grid, Row, Col} from 'react-flexbox-grid'

class LoginForm extends Component {
  render() {
    return (
      <Grid fluid>
        <Row style={{paddingTop: '2em'}}>
          <Col xs={1} sm={2} lg={4} />
          <Col xs={12} sm={8} lg={4} >
            <div class="pt-card pt-elevation-3">
              <h5><a href="#">Please login to continue</a></h5>

              <div class="pt-form-group" style={{paddingTop: '1em'}}>
                <label class="pt-label" for="email">
                  Email
                </label>
                <div class="pt-form-content">
                  <input id="email" class="pt-input" style={{width: '100%'}} placeholder="test@test.com" type="email" dir="auto" />
                  <div class="pt-form-helper-text">(Hint: test@test.com)</div>
                </div>
              </div>

              <div class="pt-form-group">
                <label class="pt-label" for="password">
                  Password
                </label>
                <div class="pt-form-content">
                  <input id="password" class="pt-input" style={{width: '100%'}} type="password" dir="auto" />
                  <div class="pt-form-helper-text">(Hint: test1234)</div>
                </div>
              </div>

              <Row end="xs">
                <Col style={{paddingTop: '1em', paddingRight: '0.5em'}}>
                  <button type="submit" class="pt-button pt-intent-primary">
                    Login
                    <span class="pt-icon-standard pt-icon-arrow-right pt-align-right"></span>
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

export default LoginForm
