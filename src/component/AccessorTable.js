import React from 'react'
import {Intent, Position, Tooltip} from '@blueprintjs/core'
import Markdown from './Markdown'

const AccessorTable = () => (
  <table className="pt-table pt-striped" style={{width: '100%'}}>
    <thead>
      <tr>
        <th>HTML</th>
        <th>Method</th>
        <th>Example Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <Markdown source={'<input type="text">'} />
            <br />
            e.g.&nbsp;
            <Tooltip
              content="Inspect this HTML element using Chrome Dev Tools!"
              inline={true}
              intent={Intent.PRIMARY}
              position={Position.RIGHT}
            >
              <input id="u" type="text" style={{width: '5em'}} />
            </Tooltip>
        </td>
        <td><Markdown source={'text_field'} /></td>
        <td><Markdown source={'Setting the value to a String\n```\nbrowser.text_field(id: \'u\').set \'someuser\'\n```'} /></td>
      </tr>

      <tr>
        <td>
          <Markdown source={'<select />'} />
          <br />
          e.g.&nbsp;
          <Tooltip
            content="Inspect this HTML element using Chrome Dev Tools!"
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.RIGHT}
          >
            <select id="s">
              <option value="pass">Pass</option>
              <option value="fail">Fail</option>
            </select>
          </Tooltip>
        </td>
        <td><Markdown source={'select_list'} /></td>
        <td><Markdown source={'Selecting the option with a specific String value\n```\nbrowser.select_list(id: \'s\').select \'Fail\'\n```'} /></td>
      </tr>

      <tr>
        <td>
          <Markdown source={'<input type="radio">'} />
          <br />
          e.g.&nbsp;
          <Tooltip
            content="Inspect this HTML using Chrome Dev Tools!"
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.RIGHT}
          >
            <form>
            <input type="radio" name="gender" value="male" checked /> M&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value="female" /> F&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value="other" /> Other
            </form>
          </Tooltip>
        </td>
        <td><Markdown source={'radio'} /></td>
        <td><Markdown source={'Clicking a radio button with a specific value\n```rb\nr = browser.radio(value: \'female\')\nr.exists?\nr.set\n```'} /></td>
      </tr>

      <tr>
        <td>
          <Markdown source={'<input type="checkbox">'} />
          <br />
          e.g.&nbsp;
          <Tooltip
            content="Inspect this HTML using Chrome Dev Tools!"
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.RIGHT}
          >
            <form>
            <input type="checkbox" name="vehicle" value="bike" checked /> Bike&nbsp;&nbsp;&nbsp;
            <input type="checkbox" name="vehicle" value="car" /> Car&nbsp;&nbsp;&nbsp;
            </form>
          </Tooltip>
        </td>
        <td><Markdown source={'checkbox'} /></td>
        <td><Markdown source={'Clicking a checkbox with a specific value\n```rb\nc = browser.checkbox(value: \'car\')\nc.exists?\nc.set\n```'} /></td>
      </tr>

      <tr>
        <td>
          <Markdown source={'<input type="button"> or <button>'} />
          <br />
          e.g.&nbsp;
          <Tooltip
            content="Inspect this HTML using Chrome Dev Tools!"
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.RIGHT}
          >
            <form>
            <input type="button" id="ex2" value="Click Me!" />
            </form>
          </Tooltip>
        </td>
        <td><Markdown source={'button'} /></td>
        <td><Markdown source={'Clicking a button with a specific id\n```rb\nb = browser.button(id: \'ex2\')\nb.exists?\nb.click\n```'} /></td>
      </tr>

      <tr>
        <td>
          <Markdown source={'<a href="https://google.com">Go to Google</a>'} />
          <br />
          e.g.&nbsp;
          <Tooltip
            content="Inspect this HTML using Chrome Dev Tools!"
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.RIGHT}
          >
            <a id="goog" href="https://google.com">Go to Google</a>
          </Tooltip>
        </td>
        <td><Markdown source={'link'} /></td>
        <td><Markdown source={'Clicking a link with a specific id\n```rb\ngoogle_link = browser.link(id: \'goog\')\ngoogle_link.click\n```'} /></td>
      </tr>

      <tr>
        <td>
          <Markdown source={'`<div>lorem</div>` or `<span>ipsum</span>`'} />
          <br />
          e.g.&nbsp;
          <Tooltip
            content="Inspect this HTML using Chrome Dev Tools!"
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.RIGHT}
          >
            <div id="orange-ct" style={{display: 'flex', justifyContent: 'flex-start'}}>
              <div className="color-box" style={{backgroundColor: '#FF850A', width: '1em', height: '1em', marginRight: '0.5em'}}></div>
              <span id="color-label">Orange</span>
            </div>
          </Tooltip>
        </td>
        <td><Markdown source={'div, span, etc.'} /></td>
        <td><Markdown source={'Locating something within a container div\n```rb\ncontainer = browser.div(id: \'orange-ct\')\ncontainer.span.present?\ncontainer.span.text # => \'Orange\'\n```'} /></td>
      </tr>

    </tbody>
  </table>
)

export default AccessorTable
