const User = require("../models/User.js");

async function testUser() {
    await User.query()
	.select()
	.then((users) => console.log(users))
	.catch(((error) => console.log(error.message));
    User.knex().destroy();
}

testUser();
