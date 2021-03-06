const {User} = require('../models')
const jwt = require('jsonwebtoken')
const env = process.env.NODE_ENV || 'development'
const config = require ('../config/config')[env]


function jwtSignUser (user) {
    console.log(`assigning token`)
    const ONE_DAY = 60 * 60 * 24 
    return jwt.sign(user, config.jwtSecret, {
        expiresIn: ONE_DAY
    })
}

module.exports = {
     async register (req, res) {
        try{
            console.log(`lets create ${req.body.email}`)
            const user =  await User.create(req.body)
            console.log(`${req.body.email} its created`);
            const userJson = user.toJSON()
            res.send({
                user:userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err) {
            //email already exit
            res.status(400).send({
                error: `This email "${req.body.email}" account is already in use. `
            })
            return
        }
    },
    async login(req, res) {
        try {
            const {email, password} = req.body
            console.log(email + " " +password);
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            console.log(`user is ${user}`);
            if(!user){
                res.status(403).send({
                    error: "This user informatoin is not correct"
                })
                return
            }
                const isPasswordVaild = await user.comparePassword(password)
                console.log( 'is passwordvaild: '+ isPasswordVaild );
                if(!isPasswordVaild){
                    res.status(403).send({
                        error: "This password informatoin is not correct"
                    })
                    return
                }
            const userJson = user.toJSON()
            console.log(`login in `)
            res.send({
                user:userJson,
                token: jwtSignUser(userJson)
            })
        } catch (error) {
            res.status(500).send({
                error : "Some error has happen, please try again."
            })
            return
        }
    },
    showAllUser(req, res){
       User.findAll()
       .then(users => res.send(users) )
       
    }

}