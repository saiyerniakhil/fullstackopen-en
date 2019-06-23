import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({course}) => {
    let ran = []
    ran.push(course.map(item => {
        return item
    }))
    // console.log(ran)
    return (
        <>
        <Header heading={ran[0][0]} />
        <Content parts = {ran[0][0]["parts"]}/>
        <Total parts={ran[0][0]["parts"]} />  
        <Header heading = {ran[0][1]}/>
        <Content parts = {ran[0][1]["parts"]}/>
        <Total parts={ran[0][1]["parts"]} />
        </>   
    )
  }

  export default Course 