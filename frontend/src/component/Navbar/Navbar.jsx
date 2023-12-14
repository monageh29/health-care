
import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo-dark.webp'
export default function Navbar({data , logOut}) {
  return (
    <>
<nav  className="navbar navbar-expand-lg  ">
  <div className="container">
    <Link className="navbar-brand" to=""> <img src={logo} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
 
       
   { data ? <ul className="navbar-nav mx-auto mb-2 mt-lg-1 fa-1x ">
       
       <li className="nav-item">
         <Link className="nav-link" to="">Home</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="findadoctor">Find A doctor</Link>
       </li>
       <li className="nav-item">
         <Link className="nav-link" to="contact">Contact</Link>
       </li>
      
   
      
 
      </ul> :''  
    }
      
 
    
    
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
   
     
     
      { data ? <li className="nav-item">
        <Link className="nav-link" to="Login" onClick={logOut} >LogOut</Link>
      </li> :    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    
    <li className="nav-item">
      <Link className="nav-link" to="Login">Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="register">Register</Link>
    </li>
   

   </ul>}
  </ul> 
     



     
    
       
    </div>
  </div>
</nav>

    </>
  )
}
