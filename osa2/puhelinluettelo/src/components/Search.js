import React from 'react'

const Search = ({value, onChange}) => (
    <div>
      Filter shown with: <input value={value} onChange={onChange}/>
    </div>
  )

export default Search