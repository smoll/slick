import React from 'react'
import {withRouter, Link} from 'react-router-dom'

// TODO: add a pretty header
const Header = ({history}) => (
  <nav className="pt-navbar pt-dark">
    <div className="pt-navbar-group pt-align-left">
      <div className="pt-navbar-heading">
        <Link style={styles.link} to="/">
          <span className="pt-icon-standard pt-icon-console" /> Slick
        </Link>
      </div>
      {/* <input className="pt-input" placeholder="Search files..." type="text" /> */}
    </div>
    <div className="pt-navbar-group pt-align-right">
      <button
        className="pt-button pt-minimal pt-icon-home"
        onClick={() => history.push('/')}
      >
        Intro
      </button>
      <button
        className="pt-button pt-minimal pt-icon-document"
        onClick={() => history.push('/cheat-sheets')}
      >
        Cheat Sheets
      </button>
      <span className="pt-navbar-divider"></span>
      <button
        className="pt-button pt-minimal pt-icon-cog"
        onClick={() => history.push('/dashboard')}
      ></button>
    </div>
  </nav>
)

const styles = {
  link: {
    color: 'white',
    textDecoration: 'none',
  }
}

export default withRouter(Header)
