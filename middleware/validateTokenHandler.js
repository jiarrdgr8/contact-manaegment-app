import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"


export const validateToken = asyncHandler(async (req, res, next) => {
    let authHeader = req.headers.authorization
    if(!authHeader){
        res.status(401)
        throw new Error('User is not authorized or token is missing.')
    }
    const token = authHeader.split(' ')[1]
    // console.log(token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err){
            res.status(401)
            throw new Error('User is not authorized or token has expired.')
        }
        req.user = decoded.user
        // console.log(req.user);
    })   
    next()
}
)

