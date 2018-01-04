I'm happy to introduce **Slick: The QA Automation Learning Stack**: a set of software
tools that facilitate learning _how to code_ and write _simple, robust_ browser-based
acceptance tests, for absolute beginners or Quality Assurance / Testing Professionals
with manual testing backgrounds.

The primary tools we'll use are:

1. **Ruby**, a dynamic programming language, in which we'll implement our test logic.
2. **Watir**, for "driving", or automating, the browser.
3. **RSpec**, the Ruby test framework, for writing "expectations", or pass/fail assertions.

<br />
<div class="pt-callout pt-icon-info-sign">
  <h5>What's Watir? Selenium, but prettier</h5>
  Watir, formerly known as Watir WebDriver, is a <i>wrapper</i> around the Ruby bindings for Selenium WebDriver. You can do all the same things as Selenium, except with a simpler, more approachable syntax.
</div>
<br />

We chose these tools because they are well-known, battle-tested, and
have a low barrier to entry. That said, there is a lot of enthusiasm around other
tools, especially Google Chrome's [Puppeteer](https://github.com/GoogleChrome/puppeteer)
and Graphcool's fantastic [Chromeless](https://github.com/graphcool/chromeless)
JavaScript package (which decreased test durations from ~20min to a few seconds
for them!), so if there's enough interest, I'd be happy to write a guide for
JavaScript-based browser automation in the future.
