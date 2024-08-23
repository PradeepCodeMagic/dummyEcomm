 import React from 'react'

import Header from '../Header'
import { Outlet } from 'react-router-dom'
{/* <Footer/> */}
 
 const Routeoutlet = () => {
   return (
     <div>
     <Header/>
       <Outlet/>
       {/* <Footer/> */}
     </div>
   )
 }
 
 export default Routeoutlet
 