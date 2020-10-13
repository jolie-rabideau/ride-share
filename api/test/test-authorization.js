const Authorization = require("../models/Authorization.js")

async function testAuthorization() {
    await Authorization.query()
	.select()
	.then((authorizations) => console.log(authorizations))
	.catch((error) => console.log(error.message));
    State.knex().destroy();
}

testAuthorization();
