const Vehicle_Type = require("../models/Vehicle_Type.js");

async function testVehicleType() {
    await Vehicle_Type.query()
	.select()
	.then((vehicle_types) => console.log(vehicle_types))
	.catch((error) => console.log(error.message));
    Vehicle_Type.knex().destroy();
}

testVehicleTypes();
