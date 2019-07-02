import React, { useState,useEffect } from 'react'
import Form from './components/Form'
import personService from './services/numbers'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setNewFilter]  = useState('')
  const [filteredPerson,setFilteredPerson] = useState({})

  const hook = ()=> {
    console.log("effect")
    personService.getAll().then(initialPersons => {
      console.group("promise fulfilled")
      setPersons(initialPersons)
      console.log(initialPersons)
    })  
  }
  useEffect(hook, [])

  const checkExistence = (val) => {
    let hasMatch = false
    for (let i = 0;i < persons.length; ++i ) {
      var person = val["name"]
      if(persons[i]["name"] === person) {
        hasMatch = true
        break
      }
    }
    return hasMatch
  }
  const checkFilter = (val) => {
    
    for (let i = 0;i < persons.length; ++i ) {
      let personName = persons[i]["name"]
      if(personName.toLowerCase().includes(val)) {
        // console.log(persons[i])
        setFilteredPerson(persons[i])
      }
    }
  }

  const handleSetPerson = (personObject) => {
    personService.create(personObject).then(returnedPerson => {
      setPersons(persons.concat(returnedPerson))
    })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      number : newNumber,
      id : persons.length + 1
    }
    checkExistence(personObject) ? alert(`${personObject.name} is already added to the phonebook`) : handleSetPerson(personObject)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handlePhoneChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    let person = checkFilter(newFilter)
    checkFilter(person)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <input type="text" value={newFilter} onChange={handleFilterChange}/>

      <h2>add a new</h2>

      <p> {filteredPerson["name"]} {filteredPerson["number"]} </p>

      <form onSubmit={handleFormSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <br/>
        <div>
          number: <input value={newNumber} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <Form persons={persons}/>
    </div>
  )
}


export default App