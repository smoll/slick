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

#### Browser Methods

Some methods available to a `browser` instance. For a full list, try `browser.methods.sort` (Ruby technique)

  * `browser.goto 'google.com'` navigates to a URL
  * `browser.url` gets the current URL
  * `browser.text` gets text of the entire page
  * `browser.quit` quits the browser window

#### Element Selectors

The different ways you can locate a HTML element on a page. The most specific selector (`id` or `name`) is usually the best,
otherwise your test code might be very brittle!

  * `browser.div.text` gets text of the first `<div>` on the page _**(not great)**_
  * `browser.div(class: 'content').text` gets text of the first `<div class="content">` _**(better)**_
  * `browser.div(id: 'intro').text` gets text of the unique `<div id="intro">` _**(best!)**_

#### HTML Elements vs. Accessor Methods

Also see [the official Watir website](http://watir.com/guides/elements/) for the most up-to-date list.
