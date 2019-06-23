import React, { useState } from 'react'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number : '999999999',
      id : 0
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [newNumber,setNewNumber] = useState('')

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

  return (
    <div>
      <h2>Phonebook</h2>
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