const Drivers = require("../models/Drivers.js");

async function testDrivers() {
    await Drivers.query()
	.select()
	.then((drivers) => console.log(drivers))
	.catch((error) => console.log(error.message));
    State.knex().destroy();
}

testDrivers();
