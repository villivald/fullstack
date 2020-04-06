import React, { useState, useEffect } from 'react'
import axios from 'axios'

const CountryInfo = ({country}) =>  {
  
  return(
    <div>
        
      <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>

      <h3>Spoken languages</h3>
      <ul>
        {country.languages.map(language =>
          <li key={language}>{language.name}</li>
        )}
      </ul>

      <img src={country.flag} width="10%" height="10%"/>

    </div>
  )
}
export default CountryInfo