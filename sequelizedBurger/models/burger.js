'use strict'
model.exports = function(sequelize, DataTypes) {
	var burgers = sequelize.define('Burger', {
		name: DataTypes.STRING,
		devoured: DataTypes.BOOLEAN,
		date: DataTypes.TIMESTAMP
	{, {
		burgerMethods: {
			associate: function(models){

			}
		}

	}



	})
}