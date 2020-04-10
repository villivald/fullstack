import React from 'react'
import Note from "./Note"

const ListToShow = ({notes, onDelete}) => (
    <div>
      {notes.map((note, i) => 
      <Note key={i} note={note} onDelete={() => onDelete(note.id)}/>
      )}
    </div>
  )

export default ListToShow