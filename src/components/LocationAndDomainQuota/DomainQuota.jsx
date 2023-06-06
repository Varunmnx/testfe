import React from 'react'
import "./common.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const DomainQuota = () => {
  return (
    <div className='domain-quota-container'>
        <div  className='padding-domain-quota'>
            <div>
                    <span>Domain Quota</span> 
                    <div className='data-quota-container'>

                                   

                                                    <div style = { { width: '80px', height: '80px' , display:"flex" , flexDirection:"column" ,gap:"20px" , alignItems:"center"}}>
                                                                        <CircularProgressbar
                                                                            value={60.33}
                                                                            text={`${60.33}% Used`}
                                                                            styles={{
                                                                                path:{
                                                                                stroke:"#0B3366"
                                                                                },
                                                                                trail:{
                                                                                stroke:"#EDEDED"
                                                                                },
                                                                                text:{
                                                                                    fill:"#909090",
                                                                                    fontSize:"8px"
                                                                                }
                                                                        }}  />

                                                                    
                                                    </div>


                                  
                                    <div >
                                        <span>Data Usage</span>
                                        <span>60.33gb/100gb</span>
                                   </div>


                                   <div>
                                        <div>
                                             <div>
                                                    <span>Today</span>
                                                    <span>30.00%</span>
                                             </div>
                                             <div>
                                                    <span>This Week</span>
                                                    <span>15.00%</span>
                                             </div>
                                             <div>
                                                    <span>This Month</span>
                                                    <span>55.00%</span>
                                             </div>
                                        </div>
                                   </div>


                                   <div>
                                        <div>
                                             <div>
                                                    <span>Increase</span>
                                                    <span>+15.00</span>
                                             </div>
                                             <div>
                                                    <span>Decrease</span>
                                                    <span>-15.00</span>
                                             </div>
                                             <div>
                                                    <span>Decrease</span>
                                                    <span>+25.00</span>
                                             </div>
                                        </div>
                                   </div>

                
                    </div>
                    <div>
                         
                    </div>
            </div>

        </div>
    </div>
  )
}

export default DomainQuota