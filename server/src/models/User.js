module.exports = (sequelize, DataTypes) => {
    console.log(`lets sequelize`);
   const User = sequelize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    })
    console.log(`its user ${User} `);
    return User
}