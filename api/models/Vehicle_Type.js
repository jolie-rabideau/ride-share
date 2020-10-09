const { knex, Model } = require("../db");

class Vehicle_Type extends Model {
	static get tableName() {
		return 'vehicle_type';
	}
	static get relationMappings() {
		const Vehicle = require('./Vehicle')
		return {
			vehicles: {
				relation: Model.HasManyRelation,
				modelClass: Vehicle,
				join: {
					from: 'vehicle_type.id',
					to: 'vehicle.vehicleTypeId'
				}
			}
		};
	}
}

module.exports = Vehicle_Type;
