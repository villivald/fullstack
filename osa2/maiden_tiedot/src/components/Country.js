import React from 'react'
import Button from "./Button"

const Country = ({ country, countrySelector}) => {
  return (
    <p>
      {country.name} <Button text="show" onClick={() => countrySelector(country)}/>
    </p>
  )
}

export default Country