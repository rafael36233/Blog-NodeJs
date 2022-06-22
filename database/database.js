const Sequelize = require("sequelize");

const connection = new Sequelize('testing','root','33261577',{
    host: 'localhost',
    dialect: 'mysql',
    timezone: "-03:00"
});

module.exports = connection;