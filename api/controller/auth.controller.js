import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const signup = async (req, res, next) => {
   const {username, email, password} = req.body
   const hashedpassword = bcryptjs.hashSync(password,10)
   const newUser = new User({username, email, password: hashedpassword})
   try {
    await newUser.save()
   res.status(201).json({message: 'User created'})
   } catch (error) {
    next(error)
   }
   
}

export const singin = async (req, res, next) => {
    const {email, password} = req.body
    try{
        const validuser = await User.findOne({email})
        if (!validuser) return next(errorHandler(401,'User not found'))
        const validpassword = bcryptjs.compareSync(password, validuser.password)
        if (!validpassword) return next(errorHandler(401,'Wrong password'))
        const token = jwt.sign({id: validuser._id}, process.env.JWT_SECRET)
        const {password:hashedpassword, ...others} = validuser._doc
        const expirationDate = new Date(Date.now() + 2 * 60 * 60 * 1000); 
        res.cookie('access_token', token, { expires: expirationDate, httpOnly: true }).status(200).json(others);
    }catch{
        next(error)
    }
}