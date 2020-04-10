import React, { useState, useEffect } from "react"
import Search from "./components/Search"
import ListToShow from "./components/ListToShow"
import noteService from './services/notes'
import Notification from './components/Notification'
import Error from "./components/Error"

const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [errorMessage2, setErrorMessage2] = useState(null)

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => {
        setNotes(initialNotes)
      })
  }, [])

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
      window.alert(` ${newName} is already added to the phonebook`);
    }
    else {
      noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote))
        setNewName("")
        setNewNumber("")
        setErrorMessage(
          `${newName} was added to the phonebook`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      })
    }
  }
  const handleRemove = (id) => {
    const listToRemove = notes.filter(note => note.id === id)
      if (listToRemove.length > 0) {
        if (window.confirm(`Do you really want to delete ${listToRemove[0].name}?`)) { 
        noteService
          .remove(id)
          .then(response => {
            setNotes(notes.filter(note => note.id !== id))
            setErrorMessage2(
              `${listToRemove[0].name} was removed from the phonebook`
            )
            setTimeout(() => {
              setErrorMessage2(null)
            }, 5000)
        })
      }
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} />
      <Error message={errorMessage2} />
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
        note.name.match(new RegExp(search, 'i')))} onDelete={handleRemove}/>  

    </div>
  )

}

export default App
