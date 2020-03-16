import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => {
    return (
      <div>
        Hello {props.name}, you are {props.age} years old
      </div>
    )
  }

const App = () => {
    const nimi = 'Pekka'
    const ika = 10
    return (
        <div>
            <h1>Greetings</h1>
            <Hello name="Maya" age={26 + 10} />
            <Hello name={nimi} age={ika} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));