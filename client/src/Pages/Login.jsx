import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setLogin } from '../state/state.js'
import axios from "axios"
import Navbar from '../Components/Navbar.jsx'
import { useSnackbar} from 'notistack'

const LoginPage = () => {
    const[account,setaccount]=useState(true);
    const handleclick=async()=>{
        setaccount(!account);
    }
  return (
    <div className='bg-slate-300 w-full h-[160vh] lg:h-[110vh] font-sans'>
        <Navbar></Navbar>
        LOGIN/REGISTER
        <div className='container  mx-auto md:mt-30 mt-24  md:w-[35vw] w-[90vw] text-center bg-slate-100 rounded-xl p-4 shadow-2xl '>
        {account?<div>
            <LOGIN/>
            <p onClick={handleclick} className='mt-3 hover:font-semibold'>Don't have account? Regsiter Here</p>
            
        </div>
        
        :<div>
            <REGISTER/>
            <p onClick={handleclick}  className='mt-3 hover:font-semibold'>ALready has a account? Login here</p>
            </div>}
            </div>
            
            
    </div>
  )
}
export default LoginPage

const LOGIN=()=>{
    const {enqueueSnackbar}=useSnackbar();
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
            enqueueSnackbar("Logged in Successfully!",{variant:"success"})
          } catch (err) {
            enqueueSnackbar("Incorrect Credentials",{variant:"error"})
            console.error(err);
          }
    }
    return(
        <div className=''>
            <h1 className='text-2xl font-semibold '>Login</h1>
            <form action="" onSubmit={handleSubmit} className='container mx-auto mt-5 flex flex-col items-center'>
                <input type="text" placeholder='Email'    id='email'    value={formData.email}    onChange={handleChange} className='md:w-[30vw] p-3 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl' />
                <input type="text" placeholder='Password' id='password' value={formData.password} onChange={handleChange} className='md:w-[30vw] p-3 m-3 rounded-full text-center text-xl items-center mt-3 text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl' />
                <button type='submit' className='bg-slate-900 hover:shadow-2xl text-lg px-6 rounded-full text-white py-2 hover:bg-slate-300 hover:text-slate-900 mt-3'>Login</button>
            </form>
        </div>
    )
}




const REGISTER=()=>{
    const {enqueueSnackbar}=useSnackbar();
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
            enqueueSnackbar("User Registered Successfully!",{variant:"success"})
          } catch (err) {
            enqueueSnackbar("Please fill all the Feilds",{variant:"error"})
            console.error(err);
          }
    }
    return(
        <div >
            <h1 className='text-2xl font-semibold '>Register Yourself!</h1>
            <form action="" onSubmit={handleSubmit} className='container mx-auto mt-5 flex flex-col items-center'>
                <div className='lg:flex'>
                <input type="text" placeholder='First-Name'      id='firstName'   value={formData.firstName}  onChange={handleChange} className='lg:w-[14vw] p-2 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl'/>
                <input type="text" placeholder='Last-Name'       id='lastName'    value={formData.lastName}   onChange={handleChange}className='lg:w-[14vw] p-2 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl' />
                </div>
                <input type="text" placeholder='Email'           id='email'       value={formData.email}      onChange={handleChange} className='md:w-[30vw] p-2 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl' />
                <input type="text" placeholder='Password'        id='password'    value={formData.password}   onChange={handleChange} className='md:w-[30vw] p-2 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl'/>
                <input type="text" placeholder='Profile Picture' id='picturePath' value={formData.picturePath}onChange={handleChange}className='md:w-[30vw] p-2 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl' />
                <input type="text" placeholder='Location'        id='location'    value={formData.location}   onChange={handleChange} className='md:w-[30vw] p-2 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl' />
                <input type="text" placeholder='Occupation'      id='occupation'  value={formData.occupation}  onChange={handleChange} className='md:w-[30vw] p-2 m-3 rounded-full text-center text-xl items-center  text-slate-600 hover:text-white hover:bg-slate-900 hover:shadow-2xl'/>
                <button type='submit'className='bg-slate-900 hover:shadow-2xl text-lg px-6 rounded-full text-white py-2 hover:bg-slate-300 hover:text-slate-900 mt-3'>Register</button>
            </form>
        </div>
    )
}


