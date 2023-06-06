
import "./progress.css"
import React ,  { useState , useEffect} from 'react'

const ProgressBar = ({percentage}) => {
  const [progress, setProgress] = useState(0)

  useEffect(()=>{
    setProgress(percentage)

  },[percentage])

  return (
    <div className='pb-container'>
             <div className="pb-bar" style={{width:progress}}> 

             </div>
    </div>
  )
}

export default ProgressBar