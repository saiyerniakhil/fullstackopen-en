import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components'

const Stat = ({text, value}) => {
    
    if( isNaN(value)) {
        return (
            <>
                {text} 0
            </>    
        )
    }
    else {

        return (
                <>
                    {text} {value}
                </>
            )
        }
}
 
const App = () => {

    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    const [all,setAll] = useState(0)

    const handleGoodClick = () => {
        setGood(good+1)
        setAll(all+1)
    }
    const handleBadClick = () => {
        setBad(bad+1)
        setAll(all-1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral+1)
        setAll(all+0)
    } 

    return (
       <div>    
        <button onClick={handleGoodClick}>good</button> 
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        <h1>Statistics</h1>
        <Stat text="good" value={good}/> <br/>        
        <Stat text="Neutral" value={neutral}/> <br/>
        <Stat text="Bad" value={neutral}/> <br/>
        <Stat text="all" value={good+neutral+bad}/> <br/>
        <Stat text="average" value={all/(good+neutral+bad)}/> <br/>
        <Stat text="positive" value={(good/(good+neutral+bad))*100}/>
        
        
       </div>    
    )
}

ReactDOM.render(<App/>,document.querySelector('#root'))