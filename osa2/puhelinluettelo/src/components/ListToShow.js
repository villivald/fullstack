import React from 'react'
import Note from "./Note"

const ListToShow = ({notes}) => (
    <div>
      {notes.map((note, i) => 
      <Note key={i} note={note}/>)}
    </div>
  )

export default ListToShow