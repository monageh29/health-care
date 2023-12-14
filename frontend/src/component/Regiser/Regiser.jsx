import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
export default function Regiser() {
  const [error,setError ] = useState('')
  const [isLoading,setisLoading]= useState(false)
  const [errorList,seterrorList]=useState([])

  let navigate= useNavigate();

  const [user, setuser]=useState({
  name:'',
    email : '',
  password : '',
 role:'patient'
  })
  let SendRrgisterDataApi=async()=>{
 

    let {data} = await axios.post('http://localhost:5000/api/v1/auth/register',user);
    console.log(data)



   if(data.message ==='user succesfully created'){
     setisLoading(false)
     localStorage.setItem('token',data.token)
     navigate('/login')    
     }else{

     setError(data.message)
     setisLoading(true)
   }
 }
 let submitRegisterForm=(e)=>{
  e.preventDefault()
 
 
  let validate=validateRegister()
  
  console.log(validate)
  if(validate.error){
    setisLoading(false)
    seterrorList(validate.error.details)
  }else{
    setisLoading(true)
    SendRrgisterDataApi()
  }
}

  let handleInputChange=(e)=>{
    let myuser={...user};
    // console.log(e.target.value)
   myuser[e.target.name]=e.target.value
    setuser(myuser)
    console.log(myuser)
    
  }
  let validateRegister=()=>{
    const scheme=Joi.object({
      name : Joi.string().pattern(/^[A-Z]/).min(3).max(16).required(),
   
      email: Joi.string().email({tlds:['com','net']}).required(),
      password: Joi.string().pattern(new RegExp(/^[A-Z][a-z]{3,6}/)).required(),
      role:Joi.string().required()
   
    })
    return scheme.validate(user,{abortEarly:false})
  }
  return (
    <div className='py-3 w-75 m-auto'>
      <h4 className='fw-bold  my-4'> Registration Form</h4>
      <form onSubmit={submitRegisterForm} >
      {errorList.map((err,indix)=>{
        if(err.context.label==='password') {
          return <div key={indix} className='alert alert-danger my-2'>password inviled</div>

        } else{
          return <div key={indix} className='alert alert-danger my-2'>{err.message}</div>

        }})}
        <label  htmlFor="first_name">full Name</label>
        <input onChange={handleInputChange} type="text" className='form-control my-input my-3' name='name' id='name' />
        
        <label htmlFor="email">email</label>
        <input onChange={handleInputChange}  type="email" className='form-control my-input my-3' name='email' id='email' />
      
        <label htmlFor="password">password</label>
        <input onChange={handleInputChange}   type="password" className='form-control my-input my-3' name='password' id='password' />
        <div className='mb-3 d-flex align-items-center justify-contant-between'>
          <label htmlFor="" >
            Are you a :
            <select onChange={handleInputChange} className='mx-2' name="role" id="role">
              <option onChange={handleInputChange} value="patient">patient</option>  
              <option onChange={handleInputChange}   value="doctor">Doctor</option>  

            </select>
          </label>
        </div>
        {error.length>0?<div className='alert alert-danger my-2'>{error}</div>:''}

        <button className='btn btn-info'>  {isLoading ===true?<i className='fas fa-spinner fa-spin'></i>:"Register "}</button>
        <p className='mt-2'>Already have an account? <Link to='/login' className='ml-1 text-decoration-none'> Login</Link></p>

      </form>
    </div>
  )
}
