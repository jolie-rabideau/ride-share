const State = require('../models/State');

State.query()
	.select('id', 'name')
	.then(state => {
		console.log('NAME', state.name, 'ID', state.id);
	})
	.catch(error => console.log(error.message));
		
