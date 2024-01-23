import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../state/state.js'
import axios from "axios"
import Navbar from '../Components/Navbar.jsx'

const LoginPage = () => {
    const[account,setaccount]=useState(true);
    const handleclick=async()=>{
        setaccount(!account);
    }
  return (
    <div>
        <Navbar></Navbar>
        LOGIN/REGISTER
        {account?<div>
            <LOGIN/>
            <p onClick={handleclick}>Don't have account? Regsiter Here</p>
        </div>
        :<div>
            <REGISTER/>
            <p onClick={handleclick}>ALready has a account? Login here</p>
            </div>}
    </div>
  )
}
export default LoginPage

const LOGIN=()=>{
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const[formData,setFormDate]=useState({
        email:"",
        password:""
    })
    const handleChange=(e)=>{
        setFormDate((prev)=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post("http://localhost:3001/auth/login", formData);
            dispatch(
                setLogin({
                    user:response.data.user,
                    token:response.data.token,
                })
            )
            navigate('/home');
            alert("Logged In!");
          } catch (err) {
            console.error(err);
          }
    }
    return(
        <div>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='Email'    id='email'    value={formData.email}    onChange={handleChange} />
                <input type="text" placeholder='Password' id='password' value={formData.password} onChange={handleChange} />
                <button type='submit'>Login</button>
            </form>
        </div>
    )
}




const REGISTER=()=>{
    const[formData,setFormDate]=useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        picturePath:"",
        location:"",
        occupation:""
    })
    const handleChange=(e)=>{
        setFormDate((prev)=>({
            ...prev,
            [e.target.id]:e.target.value
        }))
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            const response=await axios.post("http://localhost:3001/auth/register", formData);
            alert("Registration done!");
          } catch (err) {
            console.error(err);
          }
    }
    return(
        <div>
            <h1>Register Yourself!</h1>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='First-Name'      id='firstName'   value={formData.firstName}  onChange={handleChange} />
                <input type="text" placeholder='Last-Name'       id='lastName'    value={formData.lastName}   onChange={handleChange} />
                <input type="text" placeholder='Email'           id='email'       value={formData.email}      onChange={handleChange} />
                <input type="text" placeholder='Password'        id='password'    value={formData.password}   onChange={handleChange} />
                <input type="text" placeholder='Profile Picture' id='picturePath' value={formData.picturePath}onChange={handleChange} />
                <input type="text" placeholder='Location'        id='location'    value={formData.location}   onChange={handleChange} />
                <input type="text" placeholder='Occupation'      id='occupation'  value={formData.occupation}  onChange={handleChange} />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}


