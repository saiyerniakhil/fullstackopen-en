import React from 'react'
import personService from '../services/numbers'

const Form = ({persons}) => {

    const handleDelete = (personObject) => {
      console.log(personObject)
      console.log('delete is clicked')
      // personService.deleteVal(personObject).then(response => {
      //   console.log(response.data)
      //   console.log(response)
      // })
    }

    return (
      <>
      {
        persons.map(person => (
          <div key={person.id}>
          <p>{person.name} {person.number}</p>
          <button onClick={handleDelete(person)}>delete</button> 
          </div>
        ))
      }
      </>
    )
  }

export default Form