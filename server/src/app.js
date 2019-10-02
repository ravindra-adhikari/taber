const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {sequelize} = require('./models')
const config = require('./config/config')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

require ('./routes')(app)

sequelize.sync()
.then(() => {
    app.listen(process.env.PORT || 5000)
    console.log(`Server strated on port ${config.port} ` )
})