const Sequelize = require('sequelize');

let db = new Sequelize("postgres://gtznaypekggsbu:3ecf3a112310f204aa047d7c44a9b25791fbcf1042d4dab2c9e520f36d252cc0@ec2-54-164-22-242.compute-1.amazonaws.com:5432/dasgvpcbv95pbc", {
	dialect: 'postgres',
	dialectOptions: {
		ssl: {
			rejectUnauthorized: false
		}
	},
	define: {
		freezeTableName: true
	}
});

module.exports = db;
