const Ride = require("../models/Ride.js");

async function testRide() {
    await Ride.query()
	.select()
	.then((rides) => console.log(rides))
	.catch((error) => console.log(error.message));
    Ride.knex().destroy();
}

testRide();
