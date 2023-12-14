import React from 'react'
import {doctors} from '../../assets/data/doctors'
import styles from '../Doctor/Doctor.module.css'
import { Link } from 'react-router-dom'
import"../Doctor/Media.css"
export default function Doctor() {
console.log(doctors)
  return (
    <div className='container'>
      <div className='text-center'>
        <h2>Our Great Doctor</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, ipsam.</p>
        <input type="search"  placeholder='Search Doctor' className='py-1 w-50 mb-5 text-center '/><button className='py-1 bg-black text-white'>Search</button>
      </div>

      <div className='row '>
        <div className='col-md-4 '>
<img src={doctors[0].photo} alt="" />
<h5 className='m-3'>{doctors[0].name}</h5>
<div className='m-3 '>
  <span className={styles.specialazaton}>{doctors[0].specialazaton}</span>
  
</div>
<p className='m-3 '>{doctors[0].hospital}</p>
<div className='m-2'>
<button type='submit'  className={styles.btn} ><Link className='text-decoration-none' to='/contact'>Book Now</Link></button>

</div>
       
        </div>
        <div className='col-md-4 '>
        <img src={doctors[1].photo} alt="" />
        <h5 className='m-3'>{doctors[1].name}</h5>
        <div className='m-3 '>
  <span className={styles.specialazaton}>{doctors[1].specialazaton}</span>
  
</div>
<p className='m-3'> {doctors[1].hospital}</p>
<div className='m-2'>
<button type='submit'  className={styles.btn} ><Link className='text-decoration-none' to='/contact'>Book Now</Link></button>

</div>
       
        </div>
       


        <div className='col-md-4 '>
        <img src={doctors[2].photo} alt="" />
        <h5 className='m-3'>{doctors[2].name}</h5>
        <div className='m-3 '>
  <span className={styles.specialazaton}>{doctors[2].specialazaton}</span>
  
</div>
<p className='m-3' > {doctors[2].hospital}</p>
<div className='m-2 '>
<button type='submit'  className={styles.btn} ><Link className='text-decoration-none ' to='/contact'>Book Now</Link></button>

</div>
        </div>


      </div>
    </div>
  )
}