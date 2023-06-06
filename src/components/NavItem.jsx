import React from 'react'
import "./DashBoardItems.css"
import { Link } from 'react-router-dom'


const NavItem = ({icon , href}) => {
  return (
<Link className='nav-item' to={href}>
    <img src={icon} alt="icon-dashboard" style={{height:"24px"}}/>
 </Link>
  )
}

export default NavItem