const AuthController = require ('./controllors/AuthController')
const AuthControllerPolicy = require ('./polices/AuthControllerPolicy')

module.exports = (app) => {
    app.post('/register',
    AuthControllerPolicy.register,
    AuthController.register
    )
    app.post('/login',
    AuthController.login
    )
} 
