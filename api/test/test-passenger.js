const Passenger = require("../models/Passenger.js");

async function testPassenger() {
    await Passenger.query()
	.select()
	.then((passengers) => console.log(passengers))
	.catch((error) => console.log(error.message));
    Passenger.knex().destroy();
}

testPassenger();
