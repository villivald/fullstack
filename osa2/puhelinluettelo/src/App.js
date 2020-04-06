import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Search from "./components/Search"
import ListToShow from "./components/ListToShow"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])

  console.log('render', notes.length, 'notes')

  const handleNoteChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleListChange = (event) => {
    setSearch(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      name: newName,
      number: newNumber,
    }

    if(notes.some(note => note.name === newName)) {
      window.alert(` ${newName} is already added to phonebook`);
    }
    else {
    setNotes(notes.concat(noteObject))
    setNewName('')
    setNewNumber("")
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Search value={search} onChange={handleListChange} />

      <h2>Add a new</h2>

        <form onSubmit={addNote}>
          <div>Name: <input value={newName} onChange={handleNoteChange}/></div>
          <br></br>
          <div>Number: <input value={newNumber} onChange={handleNumberChange}/></div>
          <br></br>
          <button type="submit">Add</button>
        </form> 
    
      <h2>Numbers</h2>

      <ListToShow notes={notes.filter(note => 
        note.name.match(new RegExp(search, 'i')))}/>   

    </div>
  )

}

export default App
