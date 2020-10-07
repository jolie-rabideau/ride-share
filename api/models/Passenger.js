const { knex, Model } = require("../db");

class Passenger extends Model {
	static get tableName() {
		return 'passenger';
	}
	static get relationMappings() {
		return {
			user: {
				relation: Model.HasManyRelation,
				modelClass: User,
				join: {
					from: 'user.id',
					to: 'passenger.passengerId'
				}
			}
			ride: {
				relation: Model.HasManyRelation,
				modelClass: Ride, 
				join: {
					from: 'ride.id',
					to: 'passenger.rideId'
				}
			}
		}	
	}
}

