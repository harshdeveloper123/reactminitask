import React, { useState } from 'react'

function Task4() {
    const [check,setcheck] = useState(false);

    const handleCheck = ()=>{
        setcheck(!check);
    }
  return (
    <div>
      <label>
       <input type="checkbox" onChange={handleCheck} />
       </label>
       <p>{check? "on" :"off"}</p>
      
    </div>
  )
}

export default Task4
