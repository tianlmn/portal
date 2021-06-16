import App from './app'
import ReactDom from 'react-dom'
import React from 'react'

if (document.getElementById('root')) {
  ReactDom.render(<App />, document.getElementById('root'))
}
