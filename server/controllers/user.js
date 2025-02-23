const {encrypt} = require('../helpers/hash')
const {decrypt} = require('../helpers/hash')
const {generateToken} = require('../helpers/token')
require('dotenv').config()
const User = require('../models/user')

class UserController {

    static login(req,res,next){
        const {email, password} = req.body
        User.findOne({
            email: email
        }).then(user => {
            // console.log(user._id,"<<<<<< ini controller login")
            if(user){
                if(decrypt(password,user.password)){

                    const payload = {
                        id: user.id,
                        name:user.name,
                        email:user.email
                    }
                    const token = generateToken(payload)
                    res.status(200).json({
                        token
                    })
                }else{
                    next({
                        message : "Invalid Email/Password",
                        statusCode : 400
                    })
                }
            } else{
                next({httpStatus: 404,message:'Not Found'})
            }
        }).catch(next)
    }

    static register(req,res,next){
            const {name, email, password} = req.body
            User.create({
                name, email, password
            }).then(data => {
                res.status(201).json({
                    message: 'Account is successfully created',
                    data
                })
            }).catch(next)
    }

}

module.exports = UserController;