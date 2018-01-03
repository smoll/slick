import React from 'react'
import ReactMarkdown from 'react-markdown'
import renderers from '../style/markdown'

const Markdown = (props) => {
  return (
    <ReactMarkdown renderers={renderers} {...props} />
  )
}

export default Markdown
