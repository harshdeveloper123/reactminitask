import React, { useState } from 'react'

function Task1() {
    const [count,setcount] = useState(0)
    const ince =()=>{
        console.log("state changed")
        setcount(count+1)
    }
    const dec = ()=>{
       setcount(count-1)
    }
  return (
    <div>
      <h1> Hey, Its my Task1. </h1>
      <h3>Increment and decrement functionality through button</h3>
      <button onClick={ince}>+</button>
      <span>{count}</span>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default Task1
