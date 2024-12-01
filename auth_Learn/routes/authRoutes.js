const express = require("express");  // Import Express
const {signUp,login}  = require("../controllers/authController");
// const verifyToken = require("../middleware/authMiddleware");



const router = express.Router();  // create a router instace


router.post('/signup', signUp);
router.post('/login',login);

// router.get('/home',verifyToken, (req,res)=>{
//         res.status(200).json({message: `Welcome , ${req.user.name}!`, user:req.user});
//     })

module.exports = router;