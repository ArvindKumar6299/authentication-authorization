const express = require("express");
const cors = require("cors");
const dbConnect = require("./config/dbConnect")
const authRoutes = require("./routes/authRoutes")
const verifyToken = require("./middleware/authMiddleware")


const app = express();

app.use(express.json());

//allow requests from your frontend's origin
app.use(cors({origin: 'http://localhost:5173'}))

const URI = "mongodb://localhost:27017/learn";
dbConnect(URI);


app.get('/api/home', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Welcome to the Home Page!', user: req.user });
  });

app.use("/api", authRoutes);

const PORT = 4000;
app.listen(PORT, (err)=>{
    if (err) console.log(err);
    console.log(`Server is running at : ${PORT}`)
})
