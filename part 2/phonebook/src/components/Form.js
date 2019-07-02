import React, {useState, useEffect} from 'react'
import personService from '../services/numbers'

const Form = ({persons}) => {

    return (
      <>
      {
        persons.map(person => (
          <div key={person.id}>
          <p>{person.name} {person.number}</p>
          <button onClick={
            (e) => {
              const result = window.confirm(`Do you want to delete ${person.name} from contacts`)
              console.log(result)
              result && personService.deleteVal(person)
              .then(response => {console.log()})
              .catch(error => console.log("error"))
              }
            }>
            delete
            </button> 
          </div>
        ))
      }
      </>
    )
  }

export default Form