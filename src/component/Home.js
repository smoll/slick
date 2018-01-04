import React from 'react'
import Content from './Content'
import Markdown from './Markdown'
import {files} from '../helper/markdown'

export default () => (
  <Content>
    <h2 style={styles.title}>Intro</h2>
    <Markdown source={files.get('intro-1.md')} />
    <br />
    <div class="pt-callout pt-icon-info-sign">
      <h5>What&#39;s Watir?</h5>
      Watir, formerly known as Watir WebDriver, is a wrapper around the Ruby
      bindings for Selenium WebDriver. You can do all the same things as Selenium,
      except with a simpler, more approachable syntax.
    </div>
    <br />
    <Markdown source={files.get('intro-2.md')} />
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
