const { knex, Model } = require("../db");

class Location extends Model {
	static get tableName() {
		return 'location';
	}
	static get relationMappings() {
		return {
			ride: {
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
			state: {
				relation: Model.BelongsToOneRelation,
				modelClass: State,
				join: {
					from: 'location.state',
					to: 'state.abbreviation'
				}
			}
		}
	}
}
