import React from 'react'
import ReactMarkdown from 'react-markdown'

const AccessorTable = () => (
  <table class="pt-table pt-striped">
    <thead>
      <tr>
        <th>HTML</th>
        <th>Method</th>
        <th>Example</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><ReactMarkdown source={'`<input type="text">`'} /></td>
        <td><ReactMarkdown source={'`text_input`'} /></td>
        <td><ReactMarkdown source={'```\nbrowser.text_input(id: \'u\').set \'someuser\'\n```'} /></td>
      </tr>
      <tr>
        <td><ReactMarkdown source={'`<select />`'} /></td>
        <td><ReactMarkdown source={'`select_list`'} /></td>
        <td><ReactMarkdown source={'```\nbrowser.select_list(id: \'s\').select \'Female\'\n```'} /></td>
      </tr>
      <tr>
        <td><ReactMarkdown source={'`<input type="radio">`'} /></td>
        <td><ReactMarkdown source={'`radio`'} /></td>
        <td><ReactMarkdown source={'```rb\nr = browser.radio(value: \'Green\')\nr.exists?\nr.set\n```'} /></td>
      </tr>
    </tbody>
  </table>
)

export default AccessorTable
