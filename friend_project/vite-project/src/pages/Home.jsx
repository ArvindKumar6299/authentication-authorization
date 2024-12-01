import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../utils/api';

const Home = () => {
  const [user, setUser] = useState(null); // Initialize user state as null
  const [error, setError] = useState(''); // Initialize error state
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await API.get('/api/home'); // Fetch user data
        setUser(res.data.user); // Save user data if API call succeeds
      } catch (err) {
        console.error('Error fetching user data:', err); // Log error for debugging
        setError('Access denied. Please log in.');
        navigate('/login'); // Redirect to login on error
      }
    };

    fetchData();
  }, [navigate]);

  // If there's an error, show it
  if (error) {
    return <p>{error}</p>;
  }

  // If user data is still loading, show a loading indicator
  if (!user) {
    return <p>Loading...</p>;
  }

  // Render the Home page for authenticated users
  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>You have access to this page.</p>
    </div>
  );
};

export default Home;





// import React, {useState, useEffect} from "react";
// import { useNavigate } from "react-router-dom";
// import API from "../utils/api";

// const Home = () =>{

//    const [user, setUser] = useState(null);
//    const [error, setError] = useState('');
//    const navigate = useNavigate();

//    useEffect(() =>{
//     const fetchData = async () => {
//         try{
//             const res = await API.get('/'); // Call protect APU
//             setUser(res.data.user);  // Set user data
//         } catch(err){
//             setError('Access denied. Please log in.');
//             navigate('/login'); // Redirect to login if unauthorized
//         }
//     }
//     fetchData();
//    } , [navigate]);

   
//     return(
//        <div>
//          <h1>Welcome to viste Arvind Yadav Creation</h1>

//          <h3>Welcome, {user.name}!</h3>
//          <p>You have assess to this page</p>


//          <p>{error}</p>
//        </div>
//     )
// }

// export default Home;