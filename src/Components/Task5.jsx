import React, { useEffect, useState } from 'react'

function Task5() {
    const [time , settime] = useState(60);
    useEffect(()=>{
        if(time>0){
            const timer = setTimeout(()=>
                settime(time-1),1000
            );return ()=>clearTimeout
        }
    })
  return (
    <div>
      <div>Time left:{time} </div>
    </div>
  )
}

export default Task5
