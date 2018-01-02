import React from 'react'

import Header from './Header'
import Footer from './Footer'

export default ({logout}) => (
  <div>
    <Header />
    <p>
      Welcome to the home page!
    </p>
    <button onClick={logout}>Logout Here!</button>
    <Footer />
  </div>
)
