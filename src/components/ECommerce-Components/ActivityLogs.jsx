import React from 'react'
import "./genral.css"
import campaign from "../../assets/activity/campaign.png"
import device from "../../assets/activity/device.png"
import zones from "../../assets/activity/zones.png"


const ActivityLogElement=({name, des , time , img})=>{
   return (
         <div className='activity-log-element'>
                <img src={img} alt="stat icon" />

            <div>
                  <span>{name}</span>
                  <p>
                    {des}
                  </p>
            </div>
            <div>
                  <span>{time.split(",").map(word=>{
                    return (<>
                           <span>
                            {word}
                            </span>
                            <br/>
                    </>
                    )
                  })}</span>
            </div>
         </div>
   )
}

const ActivityLogs = () => {
  const staticData = [{ name:"Device" , des:"FutureIK-device 1 report generated successfully" , img:device , time:"16 Mar 2023, 06:30:25 PM"} , 
                      {name:"Campaign" , des:"FutureIK-cinemas Modified successfully" , img:campaign , time:"16 Mar 2023, 06:30:25 PM"} ,
                      {name : "Zones" , des : "FutureIK-Display 1 created successfully" , img:zones , time:"16 Mar 2023, 06:30:25 PM"}
                    ]
  return (
    <div className='general-info-wrapper' >
            <div className='general-info-padding-live-activity-logs over-scroll'>
                <h3>Activity Logs </h3>
                <div className='device-campaig-zones-container '>
    
                   {
                      staticData.map(devices=>{
                           return (
                            <>
                                 <ActivityLogElement  name={devices.name} des={devices.des }  time={devices.time} img={devices.img} />
                            </>
                           )
                      })
                      }
                       <div style={{height:"50px", width:"100%"}}>

</div>
                      
                </div>
               
            </div>
    </div>
  )
}

export default ActivityLogs