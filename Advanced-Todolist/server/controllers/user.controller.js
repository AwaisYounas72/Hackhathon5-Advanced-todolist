const bcrypt = require("bcrypt");
const User = require('../Models/User.model');
const createToken = require("../utils/jwt");


// Register the User --> localhost:8000/api/auth/register 
const registerUser = async (req, res) => {
    try {
        // Destructuring the req.body
        const { name, email, password } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Please enter an email address" });
        }
        // Check if the user is already registered
        const user = await User.find({ email });
        if (user.length > 0) {
            return res.status(409).json({ message: "User already registered" })
        }

        // hashing the password
        const hashPassword = await bcrypt.genSalt(10).then(salt => bcrypt.hash(password, salt));

        // Creating a new user
        const newUser = await User.create({
            name,
            password: hashPassword,
            email
        })



             // Render the HTML File 
        res.status(201).json({newUser})

        // return the response
        
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};




// Method => POST --> login the User --> localhost:8000/api/auth/login` 
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) {
            return res.status(400).json({ error: "Please enter an email" });
        }

        // Find the User
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        // Check the email address
        if (user.email !== email) {
            return res.status(400).json({ error: "Please enter a valid credentials" });
        }

        // Check the password 
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid) {
            return res.status(400).json({ error: "Please enter a valid credentials" });
        }

        const signinToken = createToken(user);

        res.status(200).json({ success: true, token: signinToken.token });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
}

// Method => POST --> Signin the User --> localhost:8000/api/auth/sign-in
const signinUser = async (req, res) => {
    try {
        const { email, password } = await req.user?.user

        res.status(200).json({ success: true, user: { email, password } });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}





module.exports = { registerUser, loginUser, signinUser }