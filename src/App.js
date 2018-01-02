import React, {Component} from 'react'
import {Intent, Spinner, Icon} from "@blueprintjs/core"

import LoginForm from './LoginForm'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm />

        <footer style={{paddingTop: '4em', paddingBottom: '2em'}}>
          <center>
            Made in New York with <Icon iconName="pt-icon-heart" intent={Intent.DANGER} />
          </center>
        </footer>
      </div>
    )
  }
}

export default App
