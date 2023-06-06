import React from 'react'
import SideMenu from '../components/SideMenu'
import { useState } from 'react'
import "./home.css"
import NavBar from '../components/NavBar'
import { DontHideContentUnderDashboard } from '../constants/layouts'
import ProductDetails from '../components/ECommerce-Components/ProductDetails'
import DeviceStatus from '../components/ECommerce-Components/DeviceStatus'
import GeneralInformation from '../components/ECommerce-Components/GeneralInformation'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import LiveStatitics from '../components/ECommerce-Components/LiveStatitics'
import ActivityLogs from '../components/ECommerce-Components/ActivityLogs'
import Floationg from "../assets/headphone.png"
import Location from '../components/LocationAndDomainQuota/Location'
import DomainQuota from '../components/LocationAndDomainQuota/DomainQuota'



const Home = () => {
  const [open ,setOpen] = useState(true)
  const percentage = 66;
  return (
    <div className='home-container'>
       { open && <SideMenu setOpen={setOpen}/>}
       <NavBar/>

       <DontHideContentUnderDashboard opened={open} setOpened={setOpen}>
           <h2 className='project-name'>Project</h2>
           <ProductDetails name={"Adidas Mobile"} campaigns={8} channels={"9/10"} lastEditBy={"Varun"} timeStamp={"5 hours ago"}/>
           <div className='two-col-layout'>
           <div className='four-four-layout'>
                <div className='flex-row-gp-20'>
                      <GeneralInformation/>
                      <LiveStatitics/>
                           
                </div>
                <div className='flex-row-gp-20'>
                      <DeviceStatus/>
                      <ActivityLogs/>
                </div>
           </div>
           <div className='flex-col-gp-20'>

            <Location/>
             <DomainQuota/>
           </div>
               
           </div>
       </DontHideContentUnderDashboard>

        <img src={Floationg} alt="floating headphone" className='floating-headphone' />
    </div>
  )
}

export default Home