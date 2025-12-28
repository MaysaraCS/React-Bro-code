import React from 'react'
import ComponentD from './ComponentD'

const ComponentC = () => {
  return (
    <div><div className='box'>
        <h1>ComponentC</h1>
        <ComponentD />
    </div></div>
  )
}

export default ComponentC