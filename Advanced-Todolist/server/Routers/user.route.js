// Import the modules
const express = require('express');
const router = express.Router();
const verifyToken = require('../Middleware/userToken');
const {
    registerUser,
    loginUser,
    signinUser,
} = require('../controllers/user.controller');


// Route 01 : Method => POST --> Register the User --> localhost:8000/api/auth/register 
router.post("/register", registerUser);


// Route 03 : Method => POST --> login the User --> localhost:8000/api/auth/login`   
router.post("/login", loginUser)

// Route 04 : Method => POST --> Signin the User --> localhost:8000/api/auth/sign-in`   
router.post("/sign-in", verifyToken, signinUser)


// Export the module
module.exports = router;