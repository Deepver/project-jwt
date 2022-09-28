import React from 'react'
import { Outlet ,Navigate} from 'react-router-dom'

function Privatecomponent() {
  const auth = localStorage.getItem('registerUser') ;
  return (auth ? <Outlet />:<Navigate to = '/signup '/>)
}

export default Privatecomponent