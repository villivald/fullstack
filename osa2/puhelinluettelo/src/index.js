import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

const notes = [
  { name: "", number: "" },
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
