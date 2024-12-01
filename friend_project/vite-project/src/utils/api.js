import axios from "axios"

//set your backend base URL
const API = axios.create({
    baseURL: 'http://localhost:4000',  //replace with you backend URL
})

API.interceptors.request.use((config)=> {
    const token = localStorage.getItem('token'); //Get token from localStorage
    if(token){
        config.headers.Authorization = `Bearer ${token}`; //Add token to header
    }
    return config;
})


export default API;



//Send Token in Requests
//Include the token in the Authorization header for requests to protected routes.