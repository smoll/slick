## Cheat Sheets

<center>Hint: Use <code>Ctrl + F</code> / <code>⌘ + F</code> to search the page.</center>

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

These are the different ways you can locate a specific HTML element on a page.

##### via nesting <Tag intent="danger" text="not ideal" />
* `browser.div.text` gets text of the first `<link>` in the first `<div>` on the page

##### via class <Tag intent="warning" text="better" />
* `browser.div(class: 'content').text` gets text of the first `<div class="content">`

##### via id <Tag intent="success" text="best!" />
* `browser.div(id: 'intro').text` gets text of the unique `<div id="intro">`


<br />
<div class="pt-callout pt-icon-info-sign">
  <h5>Which selector is the best?</h5>
  Generally, using the most specific selector (id or name) is a good idea. However, if you're working with a legacy frontend and you don't have ids don't worry. Just use the best selector you can, and switch to a better one if/when you or a Developer can update the UI/HTML templates
</div>
<br />


#### HTML Elements vs. Accessor Methods

Also see [the official Watir website](http://watir.com/guides/elements/) for the most up-to-date list.

| HTML  | Method | Example Code <Note text="Note that `b` refers to a browser instance, e.g. ```b = Watir::Browser.new```" /> |
| ------------------------------------------ | --------------- | --------------------------------------- |
| `<input type="text">`                      | text_field      | `b.text_field(id: 'u').set 'foo'`       |
| `<select />`                               | select_list     | `b.select_list(id: 'm').select 'Camry'` |
| `<input type="radio">`                     | radio           | `b.radio(value: 'female')`              |
| `<input type="checkbox">`                  | checkbox        | `b.checkbox(value: 'no_reason')`        |
| `<input type="button">` or `<button>`      | button          | `b.button(id: 'x').click`               |
| `<a href="https://goo.gl">Click me!</a>`   | link            | `b.link.click`                          |
| `<div>lorem</div>` or `<span>ipsum</span>` | div, span, etc. | `b.div.text`                            |

### RSpec

#### Boilerplate

```rb
# /spec/homepage_spec.rb

RSpec.describe "Slick's website" do
  before :all do
    @browser = Watir::Browser.new :chrome
  end

  it "has a link to cheat sheets" do
    @browser.goto 'http://slick.surge.sh'
    @browser.link(id: 'cheat-sheet-link').click
    expect(browser.h2.text).to include /cheat sheet/i
  end

  after :all do
    @browser.quit
  end
end
```

#### Expectations

##### Text

```rb
actual = browser.div.text
expected = "Welcome back!"
expect(actual).to eq(expected)
```

##### Numeric Comparisons

```rb
actual = 4.9
expected = 5

expect(actual).to be > expected
# fail!

expect(actual).to be >= expected
# fail!

expect(actual).to be <= expected
# pass

expect(actual).to be < expected
# pass

delta = 0.2
expect(actual).to be_within(delta).of(expected)
# pass
```

### Bundler

#### Boilerplate

Gemfile

```rb
# frozen_string_literal: true

source "https://rubygems.org"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem 'chromedriver-helper', '~> 1.1'
gem 'rspec', '~> 3.7'
gem 'watir', '~> 6.10', '>= 6.10.2'
```

#### Usage

1. create a `Gemfile` using the boilerplate or with `bundle init`
2. to add new gems, Google Search "byebug gem", if looking for byebug for example and find a link to its https://rubygems.org page
3. find the "Gemfile line" and copy to clipboard, then paste in the `Gemfile`
4. run `bundle install` or just `bundle` to install any gems that aren't yet installed
