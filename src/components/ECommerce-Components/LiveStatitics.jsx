import React from 'react'
import "./genral.css"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const LiveStatitics = () => {
  return (
    <div className='general-info-wrapper'>
            <div className='general-info-padding-live-statitics'>
                <h3>Live Statistics </h3>
                <div className='align-general-measures'>

                   <div style={{ width: '100%', height: '100%' , display:"flex" , flexDirection:"column" ,gap:"20px" , alignItems:"center"}}>
                                        <CircularProgressbar
                                            value={10}
                                            text={`${10}%`}
                                            styles={{
                                                path:{
                                                stroke:"#0B3366"
                                                },
                                                trail:{
                                                stroke:"#EDEDED"
                                                },
                                                text:{
                                                    fill:"#909090"
                                                }
                                        }}  />

                                        <div className='alert-box-live'>
                                            info
                                        </div>
                    </div>
                    <div style={{ width: '100%', height: '100%' , display:"flex" , flexDirection:"column" ,gap:"20px" , alignItems:"center" }}>
                                        <CircularProgressbar
                                            value={27}
                                            text={`${27}%`}
                                            styles={{
                                                path:{
                                                stroke:"#0B3366"
                                                },
                                                trail:{
                                                stroke:"#EDEDED"
                                                },
                                                text:{
                                                    fill:"#909090"
                                                }
                                                
                                        }}  />
                                              <div className='alert-box-live'>
                                            Warnings
                                        </div>
                    </div>
                    <div style={{ width: '100%', height: '100%' , display:"flex" , flexDirection:"column" ,gap:"20px" , alignItems:"center"}}>
                                        <CircularProgressbar
                                            value={1}
                                            text={`${1}%`}
                                            styles={{
                                                path:{
                                                stroke:"#0B3366"
                                                },
                                                trail:{
                                                stroke:"#EDEDED"
                                                },
                                                text:{
                                                    fill:"#909090"
                                                }
                                        }}  />
                                        <div className='alert-box-live'>
                                            Errors
                                        </div>
                    </div>
                </div>

                   
            </div>
    </div>
  )
}

export default LiveStatitics