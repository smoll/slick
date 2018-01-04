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
