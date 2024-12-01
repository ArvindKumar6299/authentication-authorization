import React, { useState } from "react";
import "./Signup.css"
import API from "../utils/api";



const SignUp = () =>{

    const [formData, setFormData]  = useState({name:'', email:'', password:''});
    const [message, setMessage] = useState('');
 

    const handleChange = (e)=>{
      setFormData({...formData , [e.target.name]:e.target.value});
    }
   const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
        const res = await API.post('/api/signup', formData);
        setMessage(res.data.message);
    } catch (error) {
        setMessage(error.response.data.error || 'Somethng went wrong..')
    }
   }
    return (
        <div className="container">
            <div className="image-section">
                <img src="https://th.bing.com/th/id/OIP.52T8HHBWh6b0dwrG6tSpVQHaFe?w=252&h=186&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
            </div>
         <div className="form-section">
        <h1>SignUp Here</h1>
        <form onSubmit={handleSubmit}>
           <label htmlFor="name">Name:</label>
            <input 
              type="text" name="name" placeholder="Name" 
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label> 
            <input
             type="email" name="email" placeholder="Email"
             value= {formData.email} 
             onChange={handleChange}
             required
             />
             <label htmlFor="password">Password:</label>
             <input type="password" name="password" placeholder="Password" 
             value={formData.password}
             onChange={handleChange}
             required
             />

             <button type="submit">Sign Up</button>
        </form>
        <p>{message}</p>
        </div>   
        </div>
    )
}

export default SignUp;