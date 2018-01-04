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
