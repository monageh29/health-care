import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layoyt({userData,logOut}) {
  return (
    <div>
<Navbar data={userData} logOut={logOut} />
<Outlet/>
<Footer/>
    </div>
  )
}
