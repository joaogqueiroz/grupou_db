const dbConfig = require('../config/db');
const { Sequelize } = require('sequelize');

let connection = null;

const getConnection = () => {

    if (!connection) {
        try {
            connection = new Sequelize(
                dbConfig.DB,
                dbConfig.USER,
                dbConfig.PASSWORD,
                {
                    host: dbConfig.HOST,
                    dialect: dbConfig.dialect
                    //logging: false
                }
            )
        } catch(err){
            console.log(err);
            process.exit(1);
        }
    }

    return connection;
}

module.exports = {
    getConnection,
}