import React, {useState, useEffect} from 'react'
import personService from '../services/numbers'

const Form = ({persons,handleAction}) => {

    return (
      <>
      {
        persons.map(person => (
          <div key={person.id}>
          <p>{person.name} {person.number}</p>
          <button onClick={
            (e) => {
              handleAction(person)
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