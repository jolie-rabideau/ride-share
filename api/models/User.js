const { knex, Model } = require("../db");

class User extends Model {
	static get tableName() {
		return 'user';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.HasManyRelation,
				modelClass: Driver, 
				join: {
					from: 'user.id',
					to: 'driver.userId'
				}	
			}
			passenger: {
				relation: Model.HasManyRelation,
				modelClass: Passenger,
				join: {
					from: 'user.id',
					to: 'passenger.passengerId'
				}
			}	
		}
	}	
}
