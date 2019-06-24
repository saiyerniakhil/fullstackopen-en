import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : '999999999',
      id : 0
    },
    { name: 'Ada Lovelace', number: '39-44-5323523',id:1 },
    { name: 'Dan Abramov', number: '12-43-234345',id:2 },
    { name: 'Mary Poppendieck', number: '39-23-6423122',id:3 }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [newFilter,setNewFilter]  = useState('')
  const [filteredPerson,setFilteredPerson] = useState({})

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

  const handleFormSubmit = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      number : newNumber,
      id : persons.length + 1
    }
    checkExistence(personObject) ? alert(`${personObject.name} is already added to the phonebook`) : setPersons(persons.concat(personObject))
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
      {
        persons.map(person => (
          <p key={person.id}>{person.name} {person.number}</p>
        ))
      }
    </div>
  )
}

export default App