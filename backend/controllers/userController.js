const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register new User
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {                   // registerUser is a function              
    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all fields')
    }

    res.json({message: 'Register User'})
})


// @desc Aunthenticate a User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHandler(async (req, res) => {                        
    res.json({message: 'Login User'})
})


// @desc Get new data
// @route GET /api/users/me
// @access Public
const getUser = asyncHandler(async(req, res) => {                        
    res.json({message: 'User data here'})
})



module.exports = {
    registerUser,
    loginUser,
    getUser,
}