import asyncHandler from 'express-async-handler'
// import expressAsyncHandler from 'express-async-handler'
import User from '../models/userModel'




//@desc Register the user
//@route POST /api/users
//@access public

export const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body
    if(!username || !email || !password){
        res.status(400)
        throw new Error('All fields are mandatory')
    }
    const userAvailable = await User.findOne({email})
    if(userAvailable){
        res.status(400)
        throw new Error ('User already registered.')
    }

    res.json({message: 'Register the user'})
})


//@desc Log the user in
//@route POST /api/users
//@access public

export const loginUser = asyncHandler(async (req, res) => {
    res.json({message: 'Login user'})
})


//@desc Get current user info
//@route GET /api/users
//@access public

export const getCurrentUser = asyncHandler(async (req, res) => {
    res.json({message: 'Current user info.'})
})