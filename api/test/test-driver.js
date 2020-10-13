const Driver = require("../models/Driver.js");

async function testDriver() {
    await Driver.query()
	.select()
	.then((drivers) => console.log(drivers))
	.catch((error) => console.log(error.message));
    Driver.knex().destroy();
}

testDriver();
