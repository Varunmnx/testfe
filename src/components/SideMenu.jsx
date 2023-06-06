import React from 'react'
import Logo from "../assets/logo/logo.png"
import "./sidemenu.css"
import DashBoardItems from './DashBoardItems'
import {dashboardElements} from "../constants/constants"
import CloseBtn from './CloseBtn'

const SideMenu = ({setOpen}) => {
  return (
    <div className='side-menu-wrapper'>
      <div style={{position :"relative"}}>
            <img alt='logo' src={Logo} className='logo-adv'/>
            <div className='dashboard-items-container'>
                    {
                        dashboardElements.map((element,i)=>{
                            return  <DashBoardItems href={element.name}  icon={element.icon} key={i}/>
                        })
                    }
            </div>
            <CloseBtn setOpen={setOpen}/>
      </div>

    </div>
  )
}

export default SideMenu