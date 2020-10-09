const { knex, Model } = require("../db");

class Vehicle extends Model {
	static get tableName() {
		return 'vehicle';
	}
	static get relationMappings() {
		const Authorization = require('./Authorization')
		const Ride = require('./Ride')
		const Vehicle_Type = require('./Vehicle_Type')
		const State = require('./State')
		return {
			authorizations: {
				relation: Model.HasManyRelation,
				modelClass: Authorization,
				join: {
					from: 'vehicle.id',
					to: 'authorization.vehicleId'
				}
			}
			rides: {
				relation: Model.HasManyRelation,
				modelClass: Ride,
				join: {
					from: 'vehicle.id',
					to: 'ride.vehicleId'
				}
			}
			vehicle_types: {
				relation: Model.BelongsToOneRelation,
				modelClass: Vehicle_Type,
				join: {
					from: 'vehicle.vehicleTypeId',
					to: 'vehicle_type.id'
				}
			}
			states: {
				relation: Model.BelongsToOneRelation,
				modelClass: State,
				join: {
					from: 'vehicle.licenseState',
					to: 'state.abbreviation'
				}
			}
		};
	}
}

module.exports = Vehicle;
