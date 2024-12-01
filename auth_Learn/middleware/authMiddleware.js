const jwt = require("jsonwebtoken")


// Middlwware to verify JWT 
const verifyToken = (req,res,next) =>{
    const authHeader = req.headers['authorization']; //get the token from headers
    const token = authHeader && authHeader.split(' ')[1];  // Bearer <token>

    if(!token) return res.status(401).json({error: 'Access denied , No token provided.'});

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);  //Verify the token
        req.user = decoded;  // Atach user info to the request object
        next(); // proceed to the next middleware or router handler
    } catch (error) {
        res.status(403).json({error: 'invalid or expired token.'});
    }
}

module.exports = verifyToken;