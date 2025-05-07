import React, { useState } from 'react';
import API from '../api';

export default function Login({ onLogin, onSwitch }) {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post('/auth/login', form);
      console.log(res);
      localStorage.setItem('token', res.data.token);
      onLogin();
    } catch (err) {
      alert(err.response?.data?.error);
    }
  };

  return (
    <div className='container'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='form'>
        <input className='inputArea' placeholder="Email" onChange={(e) => setForm({ ...form, email: e.target.value })} required/>
        <input className='inputArea' type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} required/>
        <button className="inputBtn" type="submit">Log In</button>
      </form>
      <p>Don't have an account? <span onClick={onSwitch} style={{ color: 'blue', cursor: 'pointer' }}>Signup</span></p>
    </div>
  );
}
