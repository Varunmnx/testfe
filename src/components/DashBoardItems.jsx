import React from 'react'
import "./DashBoardItems.css"
import { Link } from 'react-router-dom'

const DashBoardItems = ({href , icon}) => {
  return (
    <Link className='dash-board-item' to={href}>
       <img src={icon} alt="icon-dashboard" style={{paddingLeft:"20px"}}/>
       <span> 
          {href}
       </span>
    </Link>
  )
}

export default DashBoardItems