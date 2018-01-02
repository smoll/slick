import React from 'react'

import Header from './Header'
import MainPanel from './MainPanel'
import Footer from './Footer'

export default ({logout}) => (
  <div>
    <Header />
    <MainPanel>
      <h2 style={styles.title}>Welcome to the home page!</h2>

      <p style={styles.content}>Lorem ipsum dolor sit amet, netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.</p>

      <div style={styles.buttons}>
        <button type="button" className="pt-button pt-intent-danger" onClick={logout}>
          Logout
          <span className="pt-icon-standard pt-icon-refresh pt-align-right"></span>
        </button>
      </div>
    </MainPanel>
    <Footer />
  </div>
)

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
  },
  content: {
    paddingTop: '1em',
    paddingBottom: '1em',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}
