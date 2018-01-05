import React from 'react'
import ReactMarkdown from 'react-markdown'
import {files, renderers} from '../helper/markdown'

// Dangerously interpret the markdown files in `src/markdown`! Not for user input!!!
const RawMarkdown = (props) => {
  const defaults = {escapeHtml: false}
  const {source, file, ...overrides} = props
  const otherProps = {...defaults, ...overrides}
  return (
    <ReactMarkdown
      renderers={renderers}
      source={file ? files.get(file) : source}
      {...otherProps}
    />
  )
}

export default RawMarkdown
