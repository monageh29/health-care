import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Joi from 'joi'
export default function Login({ currentUser}) {
  const [error,setError ] = useState('')
  const [isLoading,setisLoading]= useState(false)
  const [errorList,seterrorList]=useState([])

  let navigate= useNavigate();

  const [user, setuser]=useState({
 
    email : '',
  password : '',

  })
  let SendLoginDataApi=async()=>{
 

    let {data} = await axios.post('http://localhost:5000/api/v1/auth/login',user);
    console.log(data)



   if(data.message ==='Successfully Login'){
     setisLoading(false)
     localStorage.setItem('token',data.token)
     currentUser();
     navigate('/')      
    }else{

     setError(data.message)
     setisLoading(true)
   }
 }
 let submitLoginForm=(e)=>{
  e.preventDefault()
 
 
  let validate=validateLogin()
  
  console.log(validate)
  if(validate.error){
    setisLoading(false)
    seterrorList(validate.error.details)
  }else{
    setisLoading(true)
    SendLoginDataApi()
  }
}

  let handleInputChange=(e)=>{
    let myuser={...user};
    // console.log(e.target.value)
   myuser[e.target.name]=e.target.value
    setuser(myuser)
    console.log(myuser)
    
  }
  let validateLogin=()=>{
    const scheme=Joi.object({
     
   
      email: Joi.string().email({tlds:['com','net']}).required(),
      password: Joi.string().pattern(new RegExp(/^[A-Z][a-z]{3,6}/)).required()
   
   
    })
    return scheme.validate(user,{abortEarly:false})
  }
  return (
    <div className='py-3 w-75 m-auto'>
      <h4 className='fw-bold  my-4'> Login Form</h4>
      <form onSubmit={submitLoginForm} >
      {errorList.map((err,indix)=>{
        if(err.context.label==='password') {
          return <div key={indix} className='alert alert-danger my-2'>password inviled</div>

        } else{
          return <div key={indix} className='alert alert-danger my-2'>{err.message}</div>

        }})}
        
        <label htmlFor="email">email</label>
        <input onChange={handleInputChange}  type="email" className='form-control my-input my-3' name='email' id='email' />
      
        <label htmlFor="password">password</label>
        <input onChange={handleInputChange}   type="password" className='form-control my-input my-3' name='password' id='password' />
    
        {error.length>0?<div className='alert alert-danger my-2'>{error}</div>:''}

        <button className='btn btn-info'>  {isLoading ===true?<i className='fas fa-spinner fa-spin'></i>:"Login "}</button>
        <p className='mt-2'>Don't have an account? <Link to='/register' className='ml-1 text-decoration-none'> Register</Link></p>

      </form>
    </div>
  )
}
