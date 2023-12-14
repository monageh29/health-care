import React from 'react'
import styles from "../Contact/Contact.module.css"
import {doctors} from '../../assets/data/doctors'
import star from '../../assets/image/Star.png'
import '../Contact/Media-contant.css'
export default function Contact() {
  return (
    <section className={styles.page}>
 <div className='container-fluid'>
  <div className='row'>
 
  <div className=' row    '>
    
    <div class="col-md-8 ">
<div className='row'>
  <div className='col-md-4 m-1'>
  <img className={styles.img} src={doctors[1].photo} alt="" />  </div>
  <div className='col-md-6 middle '>


  <h5 className='mb-4 fw-bolder mt-2 '>{doctors[0].name}</h5>
  <span className={styles.specialazaton}>{doctors[0].specialazaton}</span>
  
<div className='mt-3'>
<span className={styles.img}><img src={star} alt="" /></span>
  <span className={styles.img}><img src={star} alt="" /></span>
  <span className={styles.img}><img src={star} alt="" /></span>


</div >
<p className='mt-2 fw-bolder'>Lorem ipsum dolor sit amet.
</p>
  </div>
</div>
    </div>

    <div className='col-md-3   '>
      <div className={styles.bor} >

    
<p className='fw-bolder'>Ticket price : <span className='m-4'>500$</span></p>
<p className='fw-bolder'>Avaliable Time : </p>
<ul mt-3>
<li className='d-flex justify-contant-between  mb-2 '>
<p className='fw-bolder'> Sunday<span className='m-2'>7AM - 10AM</span></p>
</li>
<li className='d-flex justify-contant-between  mb-2 '>
<p className='fw-bolder'> Sunday<span className='m-2'>11AM - 2BM</span></p>
</li>
<li className='d-flex justify-contant-between  mb-1 '>
<p className='fw-bolder' > Sunday<span className='m-2'>3AM - 6AM</span></p>
</li>
</ul>
<div className='text-center'>
<button type='submit'  className={styles.btn} >Book Now</button>

</div>
    </div>
    </div>
  </div>
  </div>
     
    </div>
    </section>
   
  )
}
