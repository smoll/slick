import React from 'react'
import {Intent, Position, Tooltip} from '@blueprintjs/core'
import Markdown from './Markdown'

const AccessorTable = () => (
  <table className="pt-table pt-striped" style={{width: '100%'}}>
    <thead>
      <tr>
        <th>HTML</th>
        <th>Method</th>
        <th>Example</th>
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
        <td><Markdown source={'Clicking a specific radio button with a specific value\n```rb\nr = browser.radio(value: \'female\')\nr.exists?\nr.set\n```'} /></td>
      </tr>
    </tbody>
  </table>
)

export default AccessorTable
