const { knex, Model } = require("../db");

class Driver extends Model {
	static get tableName() {
		return 'driver';
	}
	static get relationalMappings() {
		return {
			user: {
				relation: Model.HasManyRelation, 
				modelClass: User,
				join: {
					from: 'user.id',
					to: 'driver.userId'
				}
			}
			authorization: {
				relation: Model.BelongsToOneRelation,
				modelClass: Authorization,
				join: {
					from: 'authorization.driverId',
					to: 'driver.id'
				}
			}
			Drivers: {
				relation: Model.BelongsToOneRelation,
				modelClass: Drivers,
				join: {
					from: 'drivers.driverId',
					to: 'driver.id'
				}
			}
			State: {
				relation: Model.HasManyRelation,
				modelClass: State,
				join: {
					from: 'state.abbreviation',
					to: 'driver.licenseState'
				}
			}			
		}	
	}
}
