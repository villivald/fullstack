import React, { useState, useEffect } from "react"
import axios from "axios"
import Search from "./components/Search"
import ListToShow from "./components/ListToShow"
import CountryInfo from "./components/CountryInfo"


const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const handleListChange = (event) => {
    setSearch(event.target.value)
    setSelected([])
  }

  const handleCountries = () => {
    const list = countries.filter((country) => 
      country.name.match(new RegExp(search, 'i'))
    )
    const caseSensitiveList = list.filter((country) => {
      return(country.name.toLowerCase() === search.toLowerCase())
    })

    return caseSensitiveList.length > 0 ?
     caseSensitiveList : list
  }

  const listOfCountries = selected.length > 0 ? 
  selected : handleCountries()

  const selectCountry = (country) => {
    setSelected([country])
  }

  return (
    <div>
      <Search value={search} onChange={handleListChange}/>
      {listOfCountries.length > 0 ? 
      listOfCountries.length === 1 ?
      <CountryInfo country={listOfCountries[0]}/> :
      listOfCountries.length > 10 ?
      <p>Too many matches, specify another filter</p> :
      <ListToShow countries={listOfCountries} countrySelector={selectCountry}/> : 
      <p>No matches found</p>
      }
    </div>
  )
}

export default App;