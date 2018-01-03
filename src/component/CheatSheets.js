import React from 'react'
import ReactMarkdown from 'react-markdown'
import Content from './Content'
import AccessorTable from './AccessorTable'

const watir = `
### Watir

#### Boilerplate

A minimal example for reference

  \`\`\`rb
  browser = Watir::Browser.new :chrome

  browser.goto 'http://slick.surge.sh'
  browser.button.click

  puts browser.title
  browser.quit
  \`\`\`

#### Browser methods

Some methods available to a \`browser\` instance. For a full list, try \`browser.methods.sort\` (Ruby technique)

  * \`browser.goto 'google.com'\` navigates to a URL
  * \`browser.url\` gets the current URL
  * \`browser.text\` gets text of the entire page
  * \`browser.quit\` quits the browser window

#### Element selectors

The different ways you can locate a HTML element on a page. The most specific way (\`id\` or \`name\`) is usually the best,
otherwise if the HTML structure changes, your test code will break!

  * \`browser.div.text\` gets text of the first \`<div>\` on the page _**(not great)**_
  * \`browser.div(class: 'content').text\` gets text of the first \`<div class="content">\` _**(better)**_
  * \`browser.div(id: 'intro').text\` gets text of the first \`<div id="intro">\` _**(best!)**_

#### Elements <-> Accessor methods

Also see [the official Watir website](http://watir.com/guides/elements/) for the most up-to-date list.
`

const rspec = `
### RSpec

Boilerplate

  \`\`\`rb
  RSpec.describe "Slick's website" do
    before :all do
      @browser = Watir::Browser.new :chrome
    end

    it "has a link to cheat sheets" do
      @browser.goto 'http://slick.surge.sh'
      @browser.link(id: 'cheat-sheet-link').click
      expect(browser.h2.text).to include /cheat sheet/i
    end
  end
  \`\`\`
`

export default () => (
  <Content>
    <h2 style={styles.title}>Cheat Sheets</h2>
    <ReactMarkdown source={watir} />
    <AccessorTable />

    <ReactMarkdown source={rspec} />

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
