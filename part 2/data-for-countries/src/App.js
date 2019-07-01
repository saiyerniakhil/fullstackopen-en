import React,{useEffect, useState} from 'react';
import axios from 'axios';
// import logo from './logo.svg';
import './App.css';


const App = () => {

  const [countriesData,setCountriesData] = useState([])
  const [country, setCountry] = useState([])
  const [foundCountry,setFoundCountry] = useState([])
  // const [countriesLength,setCountriesLength] = useState(0)

  const hook = () => {
    axios.get("https://restcountries.eu/rest/v2/all")
    .then(response => {
      console.log("data fetched")
      setCountriesData(countriesData => countriesData.concat(response.data))
      // console.log(countriesData)
    })
  }
  useEffect(hook,[])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

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


  return (
    <div>  
      <form onSubmit={handleSubmit}>
        <input type="text" value={country} onChange={handleInputChange}/>
        <button type="submit">find</button>
      </form> 
      <ul>
        {
          foundCountry.length > 3 ? <li>Too many matches, please specify another</li> : foundCountry.map(item => (<li key={item.numericCode}>{item.name}</li>))
        }
      </ul>
    </div>
  )
}

export default App;
