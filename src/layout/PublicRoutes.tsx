import React from 'react';

import {Navigate, Outlet} from 'react-router-dom'

const useAuth=()=>{
  const user=localStorage.getItem('rowData')
  if(user){
    return true
  } else {
    return false
  }
}

const  PublicRoutes=(props:any) =>{

  const auth=useAuth()

  return auth?<Navigate to="/Dashboard"/>: <Outlet/>
}

export default PublicRoutes;
