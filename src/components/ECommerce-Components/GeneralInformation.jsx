import React from 'react'

import "./genral.css"

import ProgressBar from './childs/ProgressBar'

const GeneralInformation = () => {
  const generalInfoContent = [
    { name: "Projects", value: Math.floor(Math.random() * 100) + 1 },
    { name: "Users", value: Math.floor(Math.random() * 100) + 1 },
    { name: "Channels", value: Math.floor(Math.random() * 100) + 1 },
    { name: "Devices", value: Math.floor(Math.random() * 100) + 1 }
  ];
  return (
    <div className='general-info-wrapper'>
        <div className='general-info-padding'>
               <h3>Genral Information</h3>
               <div className='flex flex-gap-20'>
                   {
                      generalInfoContent.map((item)=>{
                       return <div className='name-with-bar'>
                                       <span className='it-name'>{item.name}</span>
                                       <ProgressBar percentage={item.value}/>
                                       <span className='it-per'>{ Math.round(item.value / 10).toString().padStart(2,"0") } / 10 </span>

                        </div>
                                          
                      })
                   }
               </div>
        </div>
    </div>
  )
}

export default GeneralInformation