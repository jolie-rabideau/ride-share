const { knex, Model } = require("../db");

class State extends Model {
	static get tableName() {
		return 'state';
	}
	static get relationMappings() {
		const Driver = require('./Driver')
		const Vehicle = require('./Vehicle')
		const Location = require('./Location')
		return {
			drivers: {
				relation: Model.BelongsToOneRelation,
				modelClass: Driver, 
				join: {
					from: 'driver.licenseState',
					to: 'state.StateId'
				}
			}
			vehicles: {
				relation: Model.HasManyRelation,
				modelClass: Vehicle, 
				join: {
					from: 'state.stateId',
					to: 'vehicle.licenseState'
				}
			}
			locations: {
				relation: Model.HasManyRelation,
				modelClass: Location, 
				join: {
					from: 'state.stateId',
					to: 'location.state'

				}
			}
		};
	}
}

module.exports = State;
