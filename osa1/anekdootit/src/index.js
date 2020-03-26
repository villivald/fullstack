import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
      {text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setSelected(Math.round(Math.random()*5));
  }

  const handleVote = () => {
    points[selected] += 1;
    console.log(points);
  }

  const handleMost = () => {
    setCount(points.indexOf(Math.max(...points)))
    console.log(count)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {props.anecdotes[selected]}
      <br></br><br></br>
      Has {points[selected]} points
      <br></br><br></br>
      <Button onClick={handleVote} text="vote"/>
      <Button onClick={() => {handleClick(); handleMost();}} text="next anecdote"/>
      <h2>Anecdote with most votes</h2>
      {props.anecdotes[count]}
      <br></br><br></br>
      Has {Math.max(...points)} points
    </div>
  )
}

const points = [0, 0, 0, 0, 0, 0]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)