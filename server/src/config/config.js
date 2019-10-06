const path = require('path')
module.exports ={
    port:5000,
    development: {
        database: process.env.DB_NAME || 'taberman',
        user: process.env.DB_USER || 'taberman',
        password: process.env.DB_PASS || 'traberman',
        dialect: process.env.DIALECT || 'sqlite',
        jwtSecret: process.env.JWT_SECRET || 'secret',
        options: {
            stroage: path.resolve(__dirname, '../../tabber.sqlite'),
            host: process.env.HOST || 'localhost',
        }
    },
    production: {
        database: process.env.DB_NAME || 'taberman',
        user: process.env.DB_USER || 'taberman',
        password: process.env.DB_PASS || 'traberman',
        dialect: process.env.DIALECT || 'sqlite',
        stroage: '../../tabber.sqlite',
        option: {
            host: process.env.HOST || 'localhost',
        },
        authentication: {
            jwtSecret: process.env.JWT_SECRET ||  'secret'
        }
    },

}