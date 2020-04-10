import React from 'react'

const Note = ({ note, onDelete }) => {
    
  return (
    <p>
      {note.name}   {note.number}
      <button text='delete' onClick={onDelete}>Delete</button>
    </p>
  )
}

export default Note