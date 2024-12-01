import React ,{useState} from "react";
import API from "../utils/api";
import {useNavigate} from 'react-router-dom';


const Login = () =>{
    
    const [formData, setFormData] = useState({email:'',password:''});
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    
    const handleChange = (e)=>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    
    const handleSubmit = async (e)=>{
       e.preventDefault();
       try {
         const res =  await API.post('/api/login', formData);
         localStorage.setItem('token', res.data.token);  //save JWT token
         navigate('/')  //Redirect to Home page
        //  setMessage(`Welcome back, ${res.data.name}`);
       } catch (error) {
          setError(error.response?.data.error || 'Invalid credentials..')
       }
    }
    return(
      <div>
        <h1>Login Here</h1>
        <form onSubmit={handleSubmit}>
            Email: 
            <input type="email" name="email" placeholder="Email"
            value={formData.email} 
            onChange={handleChange}
            required
            />
            Password: 
            <input type="password" name="password" placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required 
             />
             <button type="submit">Login</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </div>
    )
}

export default Login;


//When the user logs in, save the token in localStorage.