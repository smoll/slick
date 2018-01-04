import React from 'react'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import rb from 'highlight.js/lib/languages/ruby'

Lowlight.registerLanguage('js', js)
Lowlight.registerLanguage('rb', rb)

// Override ReactMarkdown default styles
const styles = {
  p: {
    marginTop: '1em',
    lineHeight: '1.5em',
  },
  h: {
    marginTop: '1em',
    lineHeight: '1.5em',
  },
  li: {
    marginTop: '1em',
    lineHeight: '1.5em',
  },
}

const createElement = React.createElement
function getCoreProps(props) {
  return props['data-sourcepos'] ? {'data-sourcepos': props['data-sourcepos']} : {}
}

// Renderers from https://github.com/rexxars/react-markdown/blob/f7c60d39db560aed7399939675e624d14ff82b40/src/renderers.js
function Heading(props) {
  const styleProps = {style: styles.h}
  return createElement(`h${props.level}`, {...styleProps, ...getCoreProps(props)}, props.children)
}
const Paragraph = ({children}) => (
  <p style={styles.p}>{children}</p>
)
function ListItem(props) {
  let checkbox = null
  if (props.checked !== null) {
    const checked = props.checked
    checkbox = createElement('input', {type: 'checkbox', checked, readOnly: true})
  }

  const styleProps = {style: styles.li}
  return createElement('li', {...styleProps, ...getCoreProps(props)}, checkbox, props.children)
}
const CodeBlock = ({language, value}) => {
  return (
    <Lowlight
      language={language || 'rb'}
      value={value}
    />
  )
}

export const renderers = {
  code: CodeBlock,
  heading: Heading,
  listItem: ListItem,
  paragraph: Paragraph,
}

// HACK from https://github.com/facebookincubator/create-react-app/issues/2961#issuecomment-344198546
const webpackRequireContext = require.context(
  '!raw-loader!../markdown',
  false,
  /\.md$/,
)

// Convert to Map
export const files = webpackRequireContext.keys().reduce((map, fileName) => {
  const markdown = webpackRequireContext(fileName)
  // remove the leading './'
  if (fileName.startsWith('./')){
    fileName = fileName.substr(2)
  }

  return map.set(fileName, markdown);
}, new Map())
