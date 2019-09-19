console.log(`hello form server`);

const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())

app.listen(process.env.PORT || 5000)

app.get('/status',(req, res) => {
    res.send({
        message: 'hello world !'
    })
})

app.post('/register', (req, res) => {
    res.send({
        message : `Hello ${req.body.email} been register.Have Fun`
    })
})