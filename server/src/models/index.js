const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const env = process.env.NODE_ENV || 'development'
const config = require ('../config/config') [env]
const db = {}

let sequelize;
if (config.production) {
  sequelize = new Sequelize(process.env[config.production], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

sequelize
.authenticate()
.then( () =>{
    console.log(`Connection established`);
})
.catch (err =>{
  console.log(`Unable to connect : ${err}`);
})

fs
.readdirSync(__dirname)
.filter((file) => 
    file != "index.js"
)
.forEach((file) => {
    const model = sequelize.import(path.join(__dirname, file))
    console.log(model+" model");
    db[model.name] = model
    })

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db