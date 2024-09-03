const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("nodemvc", "root", "root", {
    dialect: "mysql",
    host: "localhost",
})

try{
    sequelize.authenticate()
    console.log("Authenticated!")
} catch (error){
    console.log(error)
}

module.exports = sequelize;