import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = 'Half Stack Application Development'
    const part1 = 'Fundamentals of React'
    const excercises1 = 10
    const part2 = 'Using props to pass data'
    const excercises2 = 7
    const part3 = 'State of a component'
    const excercises3 = 14
    
    return (
        <div>
            <Header course={course}/>
            <Content p1={part1} p2={part2} p3={part3} ex1={excercises1} ex2={excercises2} ex3={excercises3}/>    
            <Total ex1={excercises1} ex2={excercises2} ex3={excercises3}/>
        </div>    
    )
}

const Header = ({course}) => (
    <h1> {course} </h1> 
)

const Content = ({p1,p2,p3,ex1,ex2,ex3}) => {
    return (
        <div>    
            <p> {p1} {ex1} </p>
            <p> {p2} {ex2} </p>
            <p> {p3} {ex3} </p>
        </div> 
    )
}

const Total = ({ex1, ex2, ex3}) => {
    return (
     
    <p>Number of excercises {ex1 + ex2 + ex3}</p>
        
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))