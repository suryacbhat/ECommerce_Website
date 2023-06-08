import React,{useState} from 'react'
import Layout from '../../componentss/Layout/Layout'
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css'; 
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
const notyf = new Notyf(
);




const Register = () => {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[phone,setPhone]=useState("");
  const[address,setAddress]=useState("");
  const[answer,setAnswer]=useState("");
  const navigate=useNavigate();

  //form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
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
      <h1>Registers Page</h1>
  <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <input 
    type="text"
    value={name}
    onChange={(e) => setName(e.target.value)}
    className="form-control" 
    id="exampleInputName"
    placeholder='Enter your name' 
    required 
    />
  </div>
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
    <input 
    type="text"
    value={phone}
    onChange={(e) => setPhone(e.target.value)}
    className="form-control" 
    id="exampleInputPhone"
    placeholder='Enter your Phone No'  
    required
    />
  </div>

  <div className="mb-3">
    <input 
    type="text"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
    className="form-control" 
    id="exampleInputAddress" 
    placeholder='Enter your Address'  
    required
     />
  </div>

  <div className="mb-3">
    <input 
    type="text"
    value={answer}
    onChange={(e) => setAnswer(e.target.value)}
    className="form-control" 
    id="exampleInputAddress" 
    placeholder='What is Favorite Sport'  
    required
     />
  </div>


  <button type="submit" className="btn btn-primary">Submit</button>
</form>

      </div>
    </Layout>
  )
};

export default Register
