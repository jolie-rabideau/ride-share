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
					to: 'state.StateId'
				}
			}
			vehicle: {
				relation: Model.HasManyRelation,
				modelClass: Vehicle, 
				join: {
					from: 'state.stateId',
					to: 'vehicle.licenseState'
				}
			}
			location: {
				relation: Model.HasManyRelation,
				modelClass: Location, 
				join: {
					from: 'state.stateId',
					to: 'location.state'

				}
			}
		}
	}
}

State.query()
	.select('stateId', 'name')
	.then(states => console.log(states))
	.catch(error => console.log(error.message));

