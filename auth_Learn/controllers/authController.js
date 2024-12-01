const User = require("../models/User")
const jwt = require("jsonwebtoken")
JWT_SECRET = "ItsArvind124";


//User registration logic
const signUp = async (req,res)=>{
   
    const {name, email, password} = req.body;  //extract data from the request body

    try {
        const user = new User({name, email, password}); // create a new user document
        await user.save();   //save the user in the database
        res.status(201).json({message: 'User is registered successfully!'})
    } catch (error) {
        res.status(400).json({message:'Error registering user', error});
    }
}


const login = async (req,res)=>{

    const {email,password} = req.body; //extract data from the request body
    try {
        const user = await User.findOne({email}); //find user by email
        if(!user || user.password !== password){
            //check if use exists and password matches
            return res.status(401).json({message: "Invalid Credentials"})
        }
        const token = jwt.sign({id: user._id}, JWT_SECRET, {expiresIn: '10h'}); // generate token
        res.json({token}); //send the token to the client
    } catch (error) {
        console.log("Login error:",error);
        res.status(500).json({message: 'Error logging in ',error});
    }
}

module.exports = {signUp, login};