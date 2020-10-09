const { knex, Model } = require("../db");

class Driver extends Model {
	static get tableName() {
		return 'driver';
	}
	static get relationalMappings() {
		const User = require('./User')
		const Authorization = require('./Authorization')
		const Drivers = require('./Drivers')
		const State = require('./State')
		return {
			users: {
				relation: Model.HasManyRelation, 
				modelClass: User,
				join: {
					from: 'user.id',
					to: 'driver.userId'
				}
			}
			authorizations: {
				relation: Model.BelongsToOneRelation,
				modelClass: Authorization,
				join: {
					from: 'authorization.driverId',
					to: 'driver.id'
				}
			}
			drivers: {
				relation: Model.BelongsToOneRelation,
				modelClass: Drivers,
				join: {
					from: 'drivers.driverId',
					to: 'driver.id'
				}
			}
			states: {
				relation: Model.HasManyRelation,
				modelClass: State,
				join: {
					from: 'state.abbreviation',
					to: 'driver.licenseState'
				}
			}			
		};	
	}
}

module.exports = Driver;
