const knex = require('knex')({
	client: 'pg',
	connection: {
		host: 'faradat.cse.taylor.edy',
		user: '',
		password: '',
		database: ''
	}
});
const objection = require('objection');
const Model = objection.Model;
Model.knex(knex);

module.exports = { knex, Model };

