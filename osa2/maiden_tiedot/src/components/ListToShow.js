import React from 'react'
import Country from './Country'

const ListToShow = ({countries, countrySelector}) => (
    <div>
      {countries.map((country, i) => 
      <Country key={country.alpha3Code} country={country} countrySelector={countrySelector}/>)}
    </div>
  )

export default ListToShow