const { knex, Model } = require("../db");

class Vehicle extends Model {
	static get tableName() {
		return 'vehicle';
	}
	static get relationMappings() {
		return {
			authorization: {
				relation: Model.HasManyRelation,
				modelClass: Authorization,
				join: {
					from: 'vehicle.id',
					to: 'authorization.vehicleId'
				}
			}
			ride: {
				relation: Model.HasManyRelation,
				modelClass: Ride,
				join: {
					from: 'vehicle.id',
					to: 'ride.vehicleId'
				}
			}
			vehicle_type: {
				relation: Model.BelongsToOneRelation,
				modelClass: Vehicle_Type,
				join: {
					from: 'vehicle.vehicleTypeId',
					to: 'vehicle_type.id'
				}
			}
			state: {
				relation: Model.BelongsToOneRelation,
				modelClass: State,
				join: {
					from: 'vehicle.licenseState',
					to: 'state.abbreviation'
				}
			}
		}
	}
}
