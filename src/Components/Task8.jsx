import React, { useState } from 'react'

function Task8() {
    const [img, setimg] = useState(null)
    const uploadimg = (e)=>{
        const selectedimg = e.target.files[0]
        setimg(selectedimg);
    }
  return (
    <div>
      <input type="file" accept='image/*' onChange={uploadimg} />
      {img && <img src={URL.createObjectURL(img)} alt='Uploaded' style={{width:`100%`, height:`100%`}}/>}
    </div>
  )
}

export default Task8
