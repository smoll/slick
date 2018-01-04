import React from 'react'
import ReactMarkdown from 'react-markdown'
import {renderers} from '../helper/markdown'

const Markdown = (props) => {
  return (
    <ReactMarkdown renderers={renderers} {...props} />
  )
}

export default Markdown
