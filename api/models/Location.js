const { knex, Model } = require("../db");

class Location extends Model {
	static get tableName() {
		return 'location';
	}
	static get relationMappings() {
		const Ride = require('./Ride')
		const State = require('./State')
		return {
			rides: {
				relation: Model.HasManyRelation,
				modelClass: Ride,
				join: {
					from: 'location.id',
					to: 'ride.fromLocationId'
				}
				join: {
					from: 'location.id',
					to: 'ride.toLocationId'
				}
			}
			states: {
				relation: Model.BelongsToOneRelation,
				modelClass: State,
				join: {
					from: 'location.state',
					to: 'state.abbreviation'
				}
			}
		};
	}
}

module.exports = Location;
