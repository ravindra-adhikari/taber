const {User} = require('../models')

module.exports = {
     async register (req, res) {
        try{
            console.log(`lets create ${req.body.email}`)
            const user =  await User.create(req.body)
            console.log(`${req.body.email} its created`);
            res.send( user.toJSON() )
        } catch (err) {
            //email already exit
            res.status(400).send({
                error: `This email "${req.body.email}" account is already in use. `
            })
        }
    },
    async login(req, res) {
        try {
            const {email, password} = req.body
            const user = await User.fondOne({
                where: {
                    email: email
                }
            })
            if(!user){
                res.status(403).send({
                    error: "This login informatoin is not correct"
                })
            }
                const isPasswordVaild = password === user.password

                if(!isPasswordVaild){
                    res.status(403).send({
                        error: "This login informatoin is not correct"
                    })
                }
            const userJson = user.toJSON()
            res.send({userJson})
        } catch (error) {
            res.status(500).send({
                error : "Some error has happen, please try again."
            })
        }
    }
}