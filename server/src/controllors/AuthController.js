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
        
    }
}