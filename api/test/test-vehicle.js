const Vehicle = require("../models/Vehicle.js");

async function testVehicle() {
    await Vehicle.query()
	.select()
	.then((vehicles) => console.log(vehicles))
	.catch((error) => console.log(error.message));
    Vehicle.knex().destroy();
}

testVehicle();
