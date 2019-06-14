import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components'

 
const App = () => {

    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    const [all,setAll] = useState(0)

    const handleGoodClick = () => {
        setGood(good+1)
        setAll(good+bad+neutral)
    }
    const handleBadClick = () => {
        setBad(bad+1)
        setAll(good+bad+neutral)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral+1)
        setAll(good+bad+neutral)
    } 

    return (
       <div>    
        <button onClick={handleGoodClick}>good</button> 
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <h1>Statistics</h1>
        Good: {good} <br/>
        Nuetral : {neutral} <br/>
        Bad : {bad} <br/>
        
        
       </div>    
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))