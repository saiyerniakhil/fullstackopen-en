import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = {
        name:'Half Stack Application Development',
        parts : [
                    {
                        name:'Fundamentals of React',
                    excercises : 10
                    },
                    {
                        name:'Using props to pass data',
                        excercises: 7
                    },
                    {
                        name:'State of a component',
                        excercises : 14
                    }
                ]}
    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts} />    
            <Total parts={course.parts} />
        </div>    
    )
}

const Header = ({course}) => (
    <h1> {course.name} </h1> 
)

const Content = ({parts}) => {
    return (
        <div>    
            <Part part = {parts[0]} />
            <Part part = {parts[1]} />
            <Part part = {parts[2]} />
        </div> 
    )
}

const Part = ({part}) => {
    return (
        <p> {part.name} {part.excercises} </p>
    )
}

const Total = ({parts}) => {
    return (
     
    <p>Number of excercises {parts[0].excercises + parts[1].excercises + parts[2].excercises}</p>
        
    )
}

ReactDOM.render(<App/>,document.getElementById('root'))