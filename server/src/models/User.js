const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))


function hashPassword (user, option) {
    console.log(`hash the password`);
    const SALT_FACTOR = 8

    if (!user.changed('password')) {
        return
      }
      return bcrypt
        .genSaltAsync(SALT_FACTOR)
        .then(salt => bcrypt.hashAsync(user.password, salt, null))
        .then(hash => {
          user.setDataValue('password', hash)
    })
}
module.exports = (sequelize, DataTypes) => {
    console.log(`lets sequelize`);
   const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    },{
        hooks: {
          /*   beforeCreate: hashPassword,*/
            beforeUpdate: hashPassword,
            beforeSave: hashPassword 
        }
    })

    User.prototype.comparePassword = function (password) {
        return bcrypt.compareAsync(password, this.password)
    }
    console.log(`its user ${User} `);
    return User
}