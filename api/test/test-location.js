const Location = require("../models/Location.js");

async function testLocation() {
    await Location.query()
	.select()
	.then((locations) => console.log(locations))
	.catch((error) => console.log(error.message));
    Location.knex().destroy();
}

testLocation();
