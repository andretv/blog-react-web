import React from 'react'
import ReactDOM from 'react-dom'

import Root from 'containers/root'

import 'src/index.scss'

const App = () =>
  <Root />

ReactDOM.render(<App />, document.getElementById('app'))

if (module.hot) {
  module.hot.accept()
}