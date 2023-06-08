import React,{useState} from 'react'
import Layout from '../../componentss/Layout/Layout'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const notyf = new Notyf(
    );
const ForgotPassword = () => {
    const[email,setEmail]=useState("");
    const[newPassword,setNewPassword]=useState("");
    const[answer,setAnswer]=useState("");

    const navigate=useNavigate();

      // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/forgot-password", {
        email,
        answer,
        newPassword,
      });
      if (res && res.data.success) {
        notyf.success(res.data && res.data.message);

        navigate("/login");
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
    type="text"
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
    className="form-control" 
    id="exampleInputEmail1" 
    placeholder='Enter your Favorite sports name'
    required  
    />
  </div>


  <div className="mb-3">
    <input 
    type="password"
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    className="form-control" 
    id="exampleInputPassword" 
    placeholder='Enter your New Password'
    required  
    />
  </div>

  <button type="submit" className="btn btn-primary">RESET</button>

 
</form>

      </div>
    </Layout>
  )
}

export default ForgotPassword
