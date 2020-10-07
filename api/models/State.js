const { knex, Model } = require("../db");

class State extends Model {
	static get tableName() {
		return 'state';
	}
	static get relationMappings() {
		return {
			driver: {
				relation: Model.BelongsToOneRelation,
				modelClass: Driver, 
				join: {
					from: 'driver.licenseState',
					to: 'state.abbreviation'
				}
			}
			vehicle: {
				relation: Model.HasManyRelation,
				modelClass: Vehicle, 
				join: {
					from: 'state.abbreviation',
					to: 'vehicle.licenseState'
				}
			}
			location: {
				relation: Model.HasManyRelation,
				modelClass: Location, 
				join: {
					from: 'state.abbreviation',
					to: 'location.state'

				}
			}
		}
	}
}

