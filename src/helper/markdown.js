import React from 'react'
import Lowlight from 'react-lowlight'
import js from 'highlight.js/lib/languages/javascript'
import rb from 'highlight.js/lib/languages/ruby'
import sh from 'highlight.js/lib/languages/shell'
import Note from '../component/Note'
import Tag from '../component/Tag'

Lowlight.registerLanguage('js', js)
Lowlight.registerLanguage('rb', rb)
Lowlight.registerLanguage('sh', sh)

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
  h2: {
    textAlign: 'center',
    marginBottom: '1em',
  },
  li: {
    marginTop: '1em',
    lineHeight: '1.5em',
  },
}

const createElement = React.createElement
const getCoreProps = (props) => {
  return props['data-sourcepos'] ? {'data-sourcepos': props['data-sourcepos']} : {}
}

// Renderers from https://github.com/rexxars/react-markdown/blob/f7c60d39db560aed7399939675e624d14ff82b40/src/renderers.js
const Heading = (props) => {
  const styleProps = {style: {...styles.h, ...(props.level === 2 ? styles.h2 : {})}}
  return createElement(`h${props.level}`, {...styleProps, ...getCoreProps(props)}, props.children)
}
const Paragraph = ({children}) => (
  <p style={styles.p}>{children}</p>
)
const ListItem = (props) => {
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
      inline={false}
    />
  )
}
const InlineCode = ({value}) => {
  return (
    <Lowlight
      value={value}
      inline={true}
    />
  )
}
const Table = ({children}) => (
  <table className="pt-table pt-striped">{children}</table>
)

const Html = (props) => {
  const components = [
    { tag: '<Note', create: (props) => createElement(Note, props) },
    { tag: '<Tag', create: (props) => createElement(Tag, props) },
  ]

  if (props.skipHtml) {
    return null
  }

  // console.log('Html props:', props)

  let el
  for (let component of components) {
    if (props.value.startsWith(component.tag)) {
      const textRegex = /text="([^"]+)"/
      const text = textRegex.test(props.value) && textRegex.exec(props.value)[1]

      const intentRegex = /intent="([^"]+)"/
      const intent = intentRegex.test(props.value) && intentRegex.exec(props.value)[1]

      el = component.create({text, intent})
      return el
    }
  }

  // Original definition follows...

  const tag = props.isBlock ? 'div' : 'span'
  if (props.escapeHtml) {
    // @todo when fiber lands, we can simply render props.value
    return createElement(tag, null, props.value)
  }

  const nodeProps = {dangerouslySetInnerHTML: {__html: props.value}}
  return createElement(tag, nodeProps)
}

export const renderers = {
  code: CodeBlock,
  heading: Heading,
  html: Html,
  inlineCode: InlineCode,
  listItem: ListItem,
  paragraph: Paragraph,
  table: Table,
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
