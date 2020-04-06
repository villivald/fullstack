import React from 'react'

const CountryInfo = ({country}) =>  {
  
  return(
    <div>
        
      <h2>{country.name}</h2>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>

      <h3>Spoken languages</h3>
      <ul>
        {country.languages.map(language =>
          <li key={language.iso639_2}>{language.name}</li>
        )}
      </ul>

      <img src={country.flag} alt={"Flag of " + country.name} width="10%" height="10%"/>

    </div>
  )
}
export default CountryInfo