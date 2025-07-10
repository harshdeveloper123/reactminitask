import React from 'react'

function Task3() {
    const Listitems = ["Cricket", "Badminton", "Hockey", "Football", "Kabaddi", "Soccer"];
  return (
    <div>
     {Listitems.map((item,index)=>{
         return <li key={index}>{item}</li>
     })}
    </div>
  )
}

export default Task3
