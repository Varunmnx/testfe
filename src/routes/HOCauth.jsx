import React from 'react'
import { useCustomContext } from '../context/store'
import { Navigate } from 'react-router-dom'

export const RestrictAuthenticatedUser =({component})=>{
 
    let  authenticated = false

    return( authenticated  ? <Navigate to="/login" /> : (<>{component}</>) )
}


export const AuthenticationRequired = ({component})=>{
    
  
    let  authenticated = false

    return( authenticated  ?  ( <>{component}</> ) : <Navigate to="/home" /> )
}