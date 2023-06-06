import React from 'react'

import "./genral.css"

const DeviceStatus = () => {
    const devices = [];

    for (let i = 1; i <= 5; i++) {
      const device = {
        name: `Test device ${i.toString().padStart(2, '0')}`,
        status: Math.random() < 0.5 ? 'offline' : 'online',
        lastresponse: getRandomDate()
      };
      devices.push(device);
    }
    
    function getRandomDate() {
      const startDate = new Date(2023, 0, 1); // January 1, 2023
      const endDate = new Date(); // Current date
      const randomDate = new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
      return randomDate.toISOString();
    }
    

  return (
    <div className='general-info-wrapper'>
        <div className='general-info-padding-pd'>
                     <h3 className='pt-3'>Device Status</h3>
                 
                   <div className='flex flex-gap-20'>
                   <div className='device-status-table-title'>
                        <span>Device Name</span>
                        <span>Status</span>
                        <span>Last Response </span>
                    </div>
                        {
                            devices.map(dev=>{
                                   return (
                                           <div className='device-status-table-title-data' key={dev.name}>
                                              <span>{dev.name}</span>
                                              <span > <span className={dev.status==="offline"?"red":"green"}>{dev.status}</span> </span>
                                              <span>{dev.lastresponse} </span>
                                            </div>
                                   )
                            })
                        }
                   </div>

        </div>
    </div>
  )
}

export default DeviceStatus