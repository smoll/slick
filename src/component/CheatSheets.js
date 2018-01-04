import React from 'react'
import Content from './Content'
import AccessorTable from './AccessorTable'
import Markdown from './Markdown'
import Note from './Note'
import {files} from '../helper/markdown'

export default () => (
  <Content>
    <h2 style={styles.title}>Cheat Sheets</h2>
    <p style={styles.subtitle}>Use&nbsp;<code>Ctrl + F</code>&nbsp;/&nbsp;<code>⌘ + F</code>&nbsp;to search the page.</p>

    <Markdown source={files.get('watir-cheatsheet-1.md')} />
    <Note
      title="Which selector is best?"
      text={
        `Generally, using the most specific selector (id or name) is a good idea.
        However, if you're working with a legacy frontend and you don't have ids
        don't worry. Just use the best selector you can, and switch to a better
        one if/when you or a Developer can update the UI/HTML templates`
      } />
    <Markdown source={files.get('watir-cheatsheet-2.md')} />
    <AccessorTable />

    <Markdown source={files.get('rspec-cheatsheet.md')} />
    <Markdown source={files.get('bundler-cheatsheet.md')} />

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
