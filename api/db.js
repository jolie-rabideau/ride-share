const knex = require('knex')({
	client: 'pg',
	connection: {
		host: '',
		user: '',
		password: '',
		database: ''
	}
});
const objection = require('objection');
const Model = objection.Model;
Model.knex(knex);

class Authorization extends Model {
	static get tableName() {
		return 'authorization';
	}
	static get relationMappings() {
		return {
			*otherTableName*: {
				relation: ,
				modelClass: ,
				join: {
					from: 'currentTable.otherTable_id',
					to: 'otherTable.otherTable_id'
				}
			}
		}
	}
}

class Driver extends Model {
	static get tableName() {
		return 'driver';
	}
}

class Drivers extends Model {
	static get tableName() {
		return 'drivers';
	}
}

class Location extends Model {
	static get tableName() {
		return 'location';
	}
}

class Passenger extends Model {
	static get tableName() {
		return 'passenger';
	}
}

class Ride extends Model {
	static get tableName() {
		return 'ride';
	}
}

class State extends Model {
	static get tableName() {
		return 'state';
	}
}

class User extends Model {
	static get tableName() {
		return 'user';
	}
}

class Vehicle_Type extends Model {
	static get tableName() {
		return 'vehicle_type';
	}
}

class Vehicle extends Model {
	static get tableName() {
		return 'vehicle';
	}
}
