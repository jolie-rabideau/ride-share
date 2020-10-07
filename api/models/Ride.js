const { knex, Model } = require("../db");

class Ride extends Model {
	static get tableName() {
		return 'ride';
	}
	static get relationMappings() {
		return {
			passenger: {
				relation: Model.HasManyRelation,
				modelClass: Passenger, 
				join: {
					from: 'ride.id',
					to: 'passenger.rideId'
				}
			}
			drivers: {
				relation: Model.HasManyRelation,
				modelClass: Drivers,
				join: {
					from: 'ride.id',
					to: 'drivers.rideId'
				}
			}
			vehicle: {
				relation: Model.BelongsToOneRelation,
				modelClass: Vehicle,
				join: {
					from: 'ride.vehicleId',
					to: 'vehicle.id'
				}
			}
			location: {
				relation: Model.BelongsToOneRelation,
				modelClass: Location, 
				join: {
					from: 'ride.fromLocationId',
					to: 'location.id'
				}
				join: {
					from: 'ride.toLocationId',
					to: 'location.id'
				}
			}
		}	
	}
}
