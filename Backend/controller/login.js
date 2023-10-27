const user = require('../model/User/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import the jwt library
require('dotenv').config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userData = await user.findOne({ email });

    if (!userData) {
      return res.status(401).json({
        status: 401,
        message: "Email is not registered",
      });
    }

    const passwordMatch = await bcrypt.compare(password, userData.password);

    if (!passwordMatch) {
      return res.status(401).json({
        status: 401,
        message: "Incorrect password",
      });
    }

    // If email and password match, create a JWT token
    const payload = {
      user_id: userData._id,
      username: userData.username,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: userData,
      token: token, // Send the JWT token in the response
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      status: 500,
      message: err,
    });
  }
};
