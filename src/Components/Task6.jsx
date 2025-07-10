import React, { useState } from 'react'

function Task6() {
    const [backgroundColor,setbackgroundColor] = useState('blue')
    const changecolor = ()=>{
        const newColor = backgroundColor==='blue'? 'yellow':'blue'
        setbackgroundColor(newColor);
    }
  return (
    <div onClick={changecolor} style={{backgroundColor,width:`100%` ,height:`100vh`, cursor: 'pointer'}}>
      Click me to change color
    </div>
  )
}

export default Task6
