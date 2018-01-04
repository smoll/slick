import React from 'react'
import Content from './Content'
import RawMarkdown from './RawMarkdown'

export default () => (
  <Content>
    <h2 style={styles.title}>Cheat Sheets</h2>
    <p style={styles.subtitle}>Use&nbsp;<code>Ctrl + F</code>&nbsp;/&nbsp;<code>⌘ + F</code>&nbsp;to search the page.</p>
    <RawMarkdown file='cheat-sheets.md'  />
  </Content>
)

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    lineHeight: '1.25em',
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '1em',
    lineHeight: '1.25em',
  },
}
