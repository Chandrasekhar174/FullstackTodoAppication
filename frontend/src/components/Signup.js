import React, { useState } from 'react'
import API from '../api';

const Signup = ({onSwitch}) => {
    const [form,setForm]=useState({username:'',email:'',password:''});

    const handleSubmit= async(e)=>{
        e.preventDefault();
        try{
            const response=await API.post('/auth/signup',form);
            console.log(response.data);
            alert(response.data.message);
            onSwitch();
        }
        catch(err){
            alert(err.response?.data?.error);   
        }
    }


  return (
    <div className='container'>
        <h2>SignUp</h2>
        <form onSubmit={handleSubmit} className='form'>
            <input className='inputArea' placeholder='Username' onChange={(e)=>setForm({...form, username:e.target.value})} required />
            <input className='inputArea' type='email' placeholder='Email' onChange={(e)=>setForm({...form,email:e.target.value})} required />
            <input className='inputArea' type='password' placeholder='Password' onChange={(e)=>setForm({...form,password:e.target.value})} required/>
            <button className='inputBtn' type='submit'>Sign Up</button>
        </form>
        <p>Already have an account ? <span onClick={onSwitch} style={{color:'blue',cursor:'pointer'}}>Login</span></p>
    </div>
  )
}

export default Signup;