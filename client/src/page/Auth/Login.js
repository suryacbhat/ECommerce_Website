import React,{useState} from 'react'
import Layout from '../../componentss/Layout/Layout'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
import {json, useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../../context/auth';
const notyf = new Notyf(
);

const Login = () => {
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[auth,setAuth]=useAuth();

    const navigate=useNavigate();

      //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/login", {
        email,
        password,
       
      });
      if (res && res.data.success) {
        notyf.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user:res.data.user,
          token:res.data.token,
        })
        localStorage.setItem('auth',JSON.stringify(res.data))
        navigate("/");
      } else {
        notyf.error(res.data.message);
      }
    } catch (error) {
      console.log(error); 
      notyf.error("Something went wrong");
    }
  };
  
  return (
    <Layout>
         <div className='register'>
      <h1>Login Page</h1>
  <form onSubmit={handleSubmit}>

  <div className="mb-3">
    <input 
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter your Email'
    required  
    />
  </div>

  <div className="mb-3">
    <input 
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="form-control" 
    id="exampleInputPassword" 
    placeholder='Enter your Password'
    required  
    />
  </div>

  <div className="mb-3">
  <button type="button" className="btn btn-primary" onClick={()=>{navigate('/forgot-password')}}>Forgot Password</button>
 </div>

  <button type="submit" className="btn btn-primary">Submit</button>

 
</form>

      </div>
    </Layout>
  )
}

export default Login
