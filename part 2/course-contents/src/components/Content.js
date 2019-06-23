import React from 'react'
import Part from './Part'

const Content = ({ parts }) => {
    // console.log(parts)
    return (
        <>
          {parts.map(item => (
              <Part key={item.id} part={item}/>
          ))}
        </>
    )
}

export default Content