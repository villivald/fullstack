import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
        {text}
    </button>
  )

const StatisticLine = ({text, text1, value}) => {
    return (
        <div>
            {text} {value} {text1} 
        </div>
    )
}

const Statistics = ({good, bad, neutral}) => {
    if (good > 0 || bad > 0 || neutral > 0) {
        return (
        <table>
            <tbody>
                <tr>
                    <td>
                        <StatisticLine text="good" />
                        <StatisticLine text="neutral" />
                        <StatisticLine text="bad" />
                        <StatisticLine text="all" />
                        <StatisticLine text="average" />
                        <StatisticLine text="positive" />
                    </td> 
                    <td>
                        <StatisticLine value ={good} />
                        <StatisticLine value ={neutral} />
                        <StatisticLine value ={bad} />
                        <StatisticLine value ={good + bad + neutral} />
                        <StatisticLine value ={(good - bad) / (good + bad + neutral)} />
                        <StatisticLine value ={good / (good + bad + neutral) * 100} text1="%" />
                    </td> 
                </tr>
            </tbody>
        </table>
    )
    }
    return (
        <div>
            No feedback given
        </div>
      )
}

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [allClicks, setAll] = useState([])
  
    const handleGoodClick = () => {
        setAll(allClicks.concat('L'))
        setGood(good + 1)
      }
    
    const handleBadClick = () => {
        setAll(allClicks.concat('R'))
        setBad(bad + 1)
      }
    
    const handleNeutralClick = () => {
        setAll(allClicks.concat('R'))
        setNeutral(neutral + 1)
      }
  
    return (
      <div>
        <h3>give feedback</h3>
        <Button onClick={handleGoodClick} text="good"/>
        <Button onClick={handleNeutralClick} text="neutral"/>
        <Button onClick={handleBadClick} text="bad"/>
        <h3>statistics</h3>
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    )
  }

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)