import React from 'react'

import LoginForm from './LoginForm'
import Footer from './Footer'

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <LoginForm />
        <Footer />
      </div>
    )
  }
}

export default App
