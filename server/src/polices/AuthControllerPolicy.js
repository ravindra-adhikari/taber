const Joi = require('joi')
module.exports = {
    register(req, res, next){
        console.log(`check registration`)
        const schema = {
            email: Joi.string().email().required(),
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/)
        }

        const {error, value} = Joi.validate(req.body, schema)

        if(error){
            console.log(`lets check errors`);
            switch(error.details[0].context.key){
                case 'email':
                    res.status(400).send({
                        error: "You must provide valid email address"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: `The password provided failed to match the following rules 
                     <br> 
                     1. It must contain ONLY Following characters: Lower case, Uppler case, Numbers
                     <br>
                     2. It must between 8 and 32 charaters`
                    })

                default:
                    res.status(400).send({
                        error: "Invalid registration information."
                    })
            }
        }
        else {
            next()
            console.log(`lets do next`);
        }
    }
}