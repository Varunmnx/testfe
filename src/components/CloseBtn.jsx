import React from 'react'
import triangle from "../assets/triangle.png"
import "./closebtn.css"
const CloseBtn = ({setOpen}) => {

  return (
    <div className='closebtn' onClick={()=>setOpen(state=>!state)}>
     
        <img src={triangle} alt='triangle' className='triangle-close'/>
    
    </div>
  )
}

export default CloseBtn