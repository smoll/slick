import React from 'react'
import {Intent, Spinner, Icon} from '@blueprintjs/core'

export default () => {
  return (
    <footer style={{paddingTop: '4em', paddingBottom: '2em'}}>
      <center>
        Made in New York with <Icon iconName='pt-icon-heart' intent={Intent.DANGER} />
      </center>
    </footer>
  )
}
