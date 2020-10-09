const { knex, Model } = require("../db");

class Drivers extends Model {
	static get tableName() {
		return 'drivers';
	}
	static get relationMappings() {
		const Driver = require('./Driver')
		const Ride = require('./Ride')
		return {
			drivers: {
				relation: Model.HasManyRelation,
				modelClass: Driver,
				join: {
					from: 'driver.id',
					to: 'drivers.driverId'
				}
			}
			rides: {
				relation: Model.HasManyRelation,
				modelClass: Ride,
				join: { 
					from: 'ride.id',
					to: 'drivers.rideId'
				}
			}
		};	
	}
}

module.exports = Drivers;
