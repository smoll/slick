import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './style/github.css'
import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
