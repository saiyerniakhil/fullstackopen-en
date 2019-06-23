import React from 'react'

const Total = ({parts}) => {
    let sum = 0
    parts.forEach(element => {
        sum += element.exercises
    });
    return (
        <p> total of {sum} exercises </p>        
    )
}

export default Total