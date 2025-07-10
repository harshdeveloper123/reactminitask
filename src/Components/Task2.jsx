import React, { useState } from 'react'

function Task2() {
    const [input, setinput] = useState("");
    const showdata = (e)=>{
      
      setinput(e.target.value);
        }
    
  return (
    
    <div>
      <input type="text" value={input} onChange={showdata} placeholder='Write your thoughts' />
      <p>{input}</p>
    </div>
  )
} 

export default Task2
