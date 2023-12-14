import React from 'react'
import hero1 from '../../assets/image/hero-img01.png'

import { Link } from 'react-router-dom'


import styles from "../Home/Home.module.css"
export default function Home() {
  return (
<section id='home'>
<div  className='container'>
  <div className='row d-flex '>
    <div className='col-md-6'>
    <h2>We help patients  </h2>
       <h2>live ahelaty,</h2>
       <h2>longer life</h2>

      <Link to="contact"><button  className={styles.btn} >Request an Appointment</button></Link>
    </div>
    <div className='row col-md-4'>
         <img src={hero1}  alt="" />
     
    
    
  </div>
</div>
</div>
</section>
   

  )
}
