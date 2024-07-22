import React from 'react'

const Card = ({advice,fetchAdvice}) => {
  return (
    <div className='card'>
        <h1>{advice}</h1>
        <button onClick={fetchAdvice}>Get Advice</button>
    </div>
  )
}

export default Card
