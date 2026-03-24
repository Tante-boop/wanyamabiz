import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  // hooks using use state that will be updated later in thge program

  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [password,setPassword]=useState("")

  // hook to store the error 
  const [error,setError]=useState()
  const [loading,setLoading]=useState()
  const [success,setSuccess]=useState()

  const submit=async (e)=>{
    // preventDEfault() prevents the action from being taken if the event is not handled
    e.preventDefault()
    setSuccess("")
    setError("")
    setLoading("Wait as you get registered...")

    try {
      // Prepare our data- FormData
      // create FormData object which will allow the key-value pairs.
      const data=new FormData()
      // append key-value pairs to data object
      data.append("username" ,username)
      data.append("email" ,email)
      data.append("phone" ,phone)
      data.append("password" ,password)

      // Axios is a library that help in sending/making different types of request to our api ie post/get/put/delete/patch
      const response=await axios.post("http://ryankindi.alwaysdata.net/api/signup",data)
      setLoading("")
      setSuccess(response.data.message)

      // clear our hooks start after successful submission
      setUsername("")
      setEmail("")
      setPhone("")
      setPassword("")

    } catch (error){
      setLoading("")
      setSuccess("")
      setError(error.message)

    }
  }

  return (
    <div className='row mt-4 justify-content-center'>
      <div className='card shadow col-md-6 p-3 text-center' style={{backgroundColor: "burlywood"}} >
        <h1>Signup</h1>
        <h5 className='text-danger'>{error}</h5>
        <h5 className='text-info'>{loading}</h5>
        <h5 className='text-success'>{success}</h5>

        <form onSubmit={submit}>
          
          <input type='text' placeholder='Enter Username' className='form-control' required value={username} onChange={(e)=>setUsername(e.target.value)}/><br />
          
          <input type='email' placeholder='Enter Email' className='form-control' required value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
          
          <input type='tel' placeholder='Enter Phone' className='form-control' required value={phone} onChange={(e)=>setPhone(e.target.value)}/><br />
          
          <input type='password' placeholder='Enter Password' className='form-control' required value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
        
          <button type='submit' className='btn text-light' style={{backgroundColor: "#022d05"}}>Sign Up</button>

        </form>

        <p>Already have an Account? <Link to={'/signin'}>Sign in</Link></p>

      </div>
    </div>
  )
}

export default Signup