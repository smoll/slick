### Watir

#### Boilerplate

A minimal example for reference

```rb
browser = Watir::Browser.new :chrome

browser.goto 'http://slick.surge.sh'
browser.button.click

puts browser.title
browser.quit
```

#### Browser Instance Methods

Here are methods available to a `browser` instance. For a full list, try `browser.methods.sort` (Ruby technique)

  * `browser.goto 'google.com'` navigates to a URL
  * `browser.url` gets the current URL
  * `browser.text` gets text of the entire page
  * `browser.quit` quits the browser window

#### Element Selectors

These are different ways you can locate a specific HTML element on a page.

##### via nesting
* `browser.div.text` gets text of the first `<div>` on the page

##### via class
* `browser.div(class: 'content').text` gets text of the first `<div class="content">`

##### via id
* `browser.div(id: 'intro').text` gets text of the unique `<div id="intro">`
