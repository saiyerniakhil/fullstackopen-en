import React,{useEffect, useState} from 'react';
import axios from 'axios';
import './App.css';


const App = () => {

  const [countriesData,setCountriesData] = useState([])
  const [country, setCountry] = useState([])
  const [foundCountry,setFoundCountry] = useState([])
  const [showDetails, setShowDetails] = useState(false)

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      console.log("data fetched")
      setCountriesData(countriesData => countriesData.concat(response.data))
      // console.log(countriesData)
    })
  }
  useEffect(hook,[])

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  // }

  const findCountry = (val) => {
    var data = countriesData.filter(d => {
      return (d.name).toLowerCase().includes(val)
    })
    return data
  }

  const handleInputChange = (e) => {
    setCountry(e.target.value)
    let country = (e.target.value).toLowerCase() 
    const x = findCountry(country)
    // console.log(x)
    setFoundCountry(x)
  }

  const handleCountryClick = () => {
    setShowDetails(true)
  }

  return (
    <div>  
        <input type="text" value={country} onChange={handleInputChange}/>
      <ul>
        {
          foundCountry.length > 3 ? <li>Too many matches, please specify another</li> : foundCountry.map(item => (<li key={item.numericCode}>{item.name} <button onClick = {handleCountryClick}> show </button>    </li>))
        }
      </ul>
      <div>
        {
          showDetails && <CountryDetails country={foundCountry}/> 
        }
      </div>
    </div>
  )
}

const CountryDetails = ({country}) => {

  
  return (
    <div>
      <h1> {country[0].name} </h1> 
      <p>language: { country[0]["region"]} </p>
      <p>population: { country[0]["population"] }</p>
    </div>
  )

}

export default App;
