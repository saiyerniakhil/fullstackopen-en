import React, {useState} from 'react';
import ReactDOM from 'react-dom';
// import styled from 'styled-components'

const Statistic = ({text, value,all,sym}) => {

    if( isNaN(value)) {
        return (
            <>
                <td>{text}</td> <td>0</td>
            </>    
        )
    }
    else {
        return (
            <>
            <td>{text}</td>  <td>{value} {sym}</td>
            </>
        )
    }
}
 
const Statistics = (props) => {

    const {good,bad,neutral,all} = props
    return (
        <>    
            <table>
            <tr>
            <Statistic text="good" value={good} /> </tr>
            <tr><Statistic text="Neutral" value={neutral} /> </tr>                  
            <tr><Statistic text="Bad" value={bad} /></tr>
            <tr><Statistic text="all" value={good+neutral+bad} /></tr>
            <tr><Statistic text="average" value={all/(good+neutral+bad)} /> </tr>
            <tr><Statistic text="positive" value={(good/(good+neutral+bad))*100} sym="%" /></tr>
            </table>
        </>
    )
}
const App = () => {

    const [good,setGood] = useState(0)
    const [neutral,setNeutral] = useState(0)
    const [bad,setBad] = useState(0)
    const [all,setAll] = useState(0)
    const [total,setTotals] = useState(0)

    const handleGoodClick = () => {
        setGood(good+1)
        setAll(all+1)
        setTotals(total+1)
    }
    const handleBadClick = () => {
        setBad(bad+1)
        setAll(all-1)
        setTotals(total+1)
    }
    const handleNeutralClick = () => {
        setNeutral(neutral+1)
        setAll(all+0)
        setTotals(total+1)
    } 

    
    return (
    <div>    
        <button onClick={handleGoodClick}>good</button> 
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
        
        <h1>Statistics</h1>
        {total?
        <div>
        <Statistics good={good} bad={bad} neutral={neutral} all={all}/>
        </div>
        :
        <div>No Feedback Given</div>
        }
        
        
        
    </div>    
    )
    
}

ReactDOM.render(<App/>,document.querySelector('#root'))