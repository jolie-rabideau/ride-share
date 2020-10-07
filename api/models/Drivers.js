const { knex, Model } = require("../db");

class Drivers extends Model {
	static get tableName() {
		return 'drivers';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.HasManyRelation,
				modelClass: Driver,
				join: {
					from: 'driver.id',
					to: 'drivers.driverId'
				}
			}
			ride: {
				relation: Model.HasManyRelation,
				modelClass: Ride,
				join: { 
					from: 'ride.id',
					to: 'drivers.rideId'
				}
			}
		}	
	}
}
