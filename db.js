const Sequilize = require('sequilize');

let db = new Sequelize(
    process.env.DATABASE_URL,
    {
        dialect: "postgres",
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false, 
            }
        },
        define: {
            freezeTableName: true
        }
    }
);

module.exports = db;