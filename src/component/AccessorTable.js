import React from 'react'
import ReactMarkdown from 'react-markdown'
import {Intent, Position, Tooltip, Icon} from '@blueprintjs/core'

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
          <ReactMarkdown source={'<input type="text">'} />
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
        <td><ReactMarkdown source={'text_field'} /></td>
        <td><ReactMarkdown source={'Setting the value to a String\n```\nbrowser.text_field(id: \'u\').set \'someuser\'\n```'} /></td>
      </tr>
      <tr>
        <td>
          <ReactMarkdown source={'<select />'} />
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
        <td><ReactMarkdown source={'select_list'} /></td>
        <td><ReactMarkdown source={'Selecting the option with a specific String value\n```\nbrowser.select_list(id: \'s\').select \'Fail\'\n```'} /></td>
      </tr>
      <tr>
        <td>
          <ReactMarkdown source={'<input type="radio">'} />
          <br />
          e.g.&nbsp;
          <Tooltip
            content="Inspect this HTML using Chrome Dev Tools!"
            inline={true}
            intent={Intent.PRIMARY}
            position={Position.RIGHT}
          >
            <form>
            <input type="radio" name="gender" value="male" checked /> Male&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value="female" /> Female&nbsp;&nbsp;&nbsp;
            <input type="radio" name="gender" value="other" /> Other
            </form>
          </Tooltip>
        </td>
        <td><ReactMarkdown source={'radio'} /></td>
        <td><ReactMarkdown source={'Clicking a specific radio button with a specific value\n```rb\nr = browser.radio(value: \'Female\')\nr.exists?\nr.set\n```'} /></td>
      </tr>
    </tbody>
  </table>
)

export default AccessorTable
