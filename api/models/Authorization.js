const { knex, Model } = require("../db");

class Authorization extends Model {
	static get tableName() {
		return 'authorization';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.BelongsToOneRelation,
				modelClass: Driver,
				join: {
					from: 'authorization.driverId',
					to: 'driver.id'
				}
			}
			vehicle: {
				relation: Model.BelongsToOneRelation,
				modelClass: Vehicle,
				join: {
					from: 'authorization.vehicleId',
					to: 'vehicle.id'
				}
			}
		}
	}
}
