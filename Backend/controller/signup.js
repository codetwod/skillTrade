const bcrypt = require('bcrypt');
const user = require('../model/User/user');
const jwt = require('jsonwebtoken');    
require('dotenv').config();
exports.signup = async (req, res) => {
    try {
        const { email, username, password ,firstname,lastname} = req.body;
        if (!username || !email || !password || !firstname) {
            console.log("Not all fields provided...");
            return res.status(400).json({
                status: 400,
                message: "Please fill all fields",
            });
        }
        const name=firstname+"  "+lastname;
        // Convert the username to lowercase
        const lowercaseUsername = username.toLowerCase();

        // Check if the lowercase username is already taken
        const existingUser = await user.findOne({ username: lowercaseUsername });
        if (existingUser) {
            return res.status(400).json({
                status: 400,
                message: "Username is already taken",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = await user.create({
            email,
            name,
            username: lowercaseUsername, // Store the lowercase username
            password: hashedPassword,
        });

        const payload = {
            user_id: userData._id,
            username: userData.username,
        };

        // Sign the JWT token with a secret key
        const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' }); // Change 'your-secret-key' to a secure key

        res.status(200).json({
            success: true,
            message: "Registration successful",
            data: userData,
            token: token, 
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({
            status: 500,
            message: err.message || "Internal server error",
        });
    }
};
