import React from 'react'
import ReactMarkdown from 'react-markdown'
import {files, renderers} from '../helper/markdown'

// Dangerously interpret the markdown files in `src/markdown`! Not for user input!!!
const RawMarkdown = (props) => {
  const source = files.get(props.file)
  return (
    <ReactMarkdown
      renderers={renderers}
      source={source}
      escapeHtml={false}
      {...props}
    />
  )
}

export default RawMarkdown
