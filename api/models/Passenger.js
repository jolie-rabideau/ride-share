const { knex, Model } = require("../db");

class Passenger extends Model {
	static get tableName() {
		return 'passenger';
	}
	static get relationMappings() {
		const User = require('./User')
		const Ride = require('./Ride')
		return {
			users: {
				relation: Model.HasManyRelation,
				modelClass: User,
				join: {
					from: 'user.id',
					to: 'passenger.passengerId'
				}
			}
			rides: {
				relation: Model.HasManyRelation,
				modelClass: Ride, 
				join: {
					from: 'ride.id',
					to: 'passenger.rideId'
				}
			}
		};	
	}
}

module.exports = Passenger;

