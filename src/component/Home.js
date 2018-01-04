import React from 'react'
import Content from './Content'
import RawMarkdown from './RawMarkdown'

export default () => (
  <Content>
    <h2 style={styles.title}>Intro</h2>
    <RawMarkdown file='intro.md' />
  </Content>
)

const styles = {
  title: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: '1em',
    lineHeight: '1.25em',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
}
