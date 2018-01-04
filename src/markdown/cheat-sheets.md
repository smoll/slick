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
* `browser.div.text` gets text of the first `<link>` in the first `<div>` on the page

##### via class
* `browser.div(class: 'content').text` gets text of the first `<div class="content">`

##### via id
* `browser.div(id: 'intro').text` gets text of the unique `<div id="intro">`


<br />
<div class="pt-callout pt-icon-info-sign">
  <h5>Which selector is the best?</h5>
  Generally, using the most specific selector (id or name) is a good idea. However, if you're working with a legacy frontend and you don't have ids don't worry. Just use the best selector you can, and switch to a better one if/when you or a Developer can update the UI/HTML templates
</div>
<br />


#### HTML Elements vs. Accessor Methods

Also see [the official Watir website](http://watir.com/guides/elements/) for the most up-to-date list.


### RSpec

#### Boilerplate

```
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

```
actual = browser.div.text
expected = "Welcome back!"
expect(actual).to eq(expected)
```

##### Numeric Comparisons

```
actual = 4.9
expected = 5
delta = 0.2

expect(actual).to be > expected
# false

expect(actual).to be >= expected
# false

expect(actual).to be <= expected
# true

expect(actual).to be < expected
# true

expect(actual).to be_within(delta).of(expected)
# true
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
