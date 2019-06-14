import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * Math.floor(props.anecdotes.length)))
  }

  const incrementPoints = () => {
    props.points[selected] += 1
  }
  const getMostVotes = (arr) =>  (arr.reduce(function(a, b) { return Math.max(a, b); }))

  return (
    <div>
        <h1>Anecdote of the day</h1> <br/>
        {props.anecdotes[selected]} <br/>
        has {props.points[selected]} votes <br/>
        <button onClick={incrementPoints}>vote</button>
        <button onClick={selectRandom}>next anecdote</button> 
      
        
        <h1>Anecdote with most votes</h1>
        {props.anecdotes[props.points.indexOf(getMostVotes(props.points))]} <br/>
        has {props.points.indexOf(getMostVotes(props.points))} votes

    </div>
  )
}

const points = [
    0,
    0,
    0,
    0,
    0,
    0
]

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
)