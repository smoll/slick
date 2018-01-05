import React from 'react'

export default ({text, intent}) => {
  const intentString = intent ? ` pt-intent-${intent}` : ''
  return <span className={`pt-tag${intentString}`}>{text}</span>
}
