import React from 'react'
import account from "../assets/navlogos/account.png"
import headset from "../assets/navlogos/headset.png"
import notification from "../assets/navlogos/notification.png"
import NavItem from './NavItem'
import "./nav.css"

const NavBar = () => {
  const navImages = [ headset , notification , account ]
  return (
    <div className='nav-bar-container'>
            <NavItem  href={""} icon={navImages[0]}/>
            <NavItem  href={""} icon={navImages[1]}/>
            <NavItem  href={""} icon={navImages[2]}/>
            <div style={{height:"100%" , width:"24px"}}>

            </div>
 
    </div>
  )
}

export default NavBar