import React from 'react'
import Content from './Content'
import AccessorTable from './AccessorTable'
import Markdown from './Markdown'
import {files} from '../helper/markdown'

export default () => (
  <Content>
    <h2 style={styles.title}>Cheat Sheets</h2>
    <p style={styles.subtitle}>Use&nbsp;<code>Ctrl + F</code>&nbsp;/&nbsp;<code>⌘ + F</code>&nbsp;to search the page.</p>

    <Markdown source={files.get('watir-cheatsheet.md')} />
    <AccessorTable />
    <Markdown source={files.get('rspec-cheatsheet.md')} />

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
