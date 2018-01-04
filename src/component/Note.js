import React from 'react'

const Note = ({title, text}) => (
  <div
    className="pt-callout pt-icon-info-sign"
    style={styles.container}
  >
    {title && <h5>{title}</h5>}
    {text}
  </div>
)

const styles = {
  container: {
    marginTop: '2em',
    marginBottom: '2em',
  },
}

export default Note
