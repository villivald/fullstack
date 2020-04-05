import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const notes = [
  { name: "Arto Hellas", number: "040-1234567" },
]

ReactDOM.render(
  <App notes={notes} />,
  document.getElementById('root')
)
